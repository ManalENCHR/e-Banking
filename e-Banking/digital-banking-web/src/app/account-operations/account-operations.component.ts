import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {catchError, Observable, throwError} from "rxjs";
import {Account, AccountDetails} from "../model/account.model";
import {AccountService} from "../services/account.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-account-operations',
  templateUrl: './account-operations.component.html',
  styleUrls: ['./account-operations.component.css']
})
export class AccountOperationsComponent implements OnInit {
  currentPage : number = 0;
  pageSize : number = 5;
  accountObservable! : Observable<AccountDetails>
  operationFromGroup! : FormGroup
  errorMessage! : string;
  idParams!: string | null;
  accId!: string;

  constructor(private fb : FormBuilder, private accountService : AccountService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.operationFromGroup = this.fb.group({
      operationType : this.fb.control(null),
      amount : this.fb.control(0),
      description : this.fb.control(null),
      accountDestination : this.fb.control(null)
    });
    this.route.paramMap.subscribe(params => {
      this.idParams = params.get('id');
    });
    if (this.idParams != null) {
      this.accId = this.idParams;
    }
    this.handleSearchAccount();
  }

  handleSearchAccount() {
    let accountId : string = this.accId;
    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation() {
    let accountId : string = this.accId;
    let operationType = this.operationFromGroup.value.operationType;
    let amount :number =this.operationFromGroup.value.amount;
    let description :string =this.operationFromGroup.value.description;
    let accountDestination :string =this.operationFromGroup.value.accountDestination;
    if (operationType=='DEBIT'){
      this.accountService.debit(accountId, amount,description).subscribe({
        next : (data)=>{
          alert("Success Debit");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
        error : (err)=>{
          console.log(err);
        }
      });
    } else if (operationType=='CREDIT'){
      this.accountService.credit(accountId, amount,description).subscribe({
        next : (data)=>{
          alert("Success Credit");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
        error : (err)=>{
          console.log(err);
        }
      });
    } else if (operationType=='TRANSFER'){
      this.accountService.transfer(accountId,accountDestination, amount,description).subscribe({
        next : (data)=>{
          alert("Success Transfer");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
        error : (err)=>{
          console.log(err);
        }
      });
    }
  }
}
