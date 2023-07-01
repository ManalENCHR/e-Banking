import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Customer} from "../model/customer.model";
import {AccountService} from "../services/account.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {
  customerId! : string;
  customer! : Customer;
  currentPage : number = 0;
  pageSize : number = 5;
  customerAccountsObservable! : any;

  constructor(private route : ActivatedRoute, private router : Router,
              private accountService : AccountService, private http: HttpClient) {
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;

  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
    this.getAccountByCustomer()
  }

  getAccountByCustomer(){
    this.accountService.getAccountsByCustomer(this.customerId,this.currentPage,this.pageSize).subscribe(data => {
      this.customerAccountsObservable = data;
      console.log("dataisthis: "+data);
    })
  }

  handleAccountOperations(acc: any) {
    this.router.navigateByUrl("/account-operations/"+acc.id, {state : acc});
  }


}
