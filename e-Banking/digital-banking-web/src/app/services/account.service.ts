import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Account, AccountDetails} from "../model/account.model";
import {Customer} from "../model/customer.model";

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http : HttpClient) { }


  public getAccount(accountId: string, page: number, size: number): Observable<AccountDetails>{
    return this.http.get<AccountDetails>(environment.backendHost+"/accounts/"+accountId+"/pageOperations?page="+page+"&size="+size);
  }

  public getAllInfoAccount(accountId: string): Observable<Account>{
    return this.http.get<Account>(environment.backendHost+"/accounts/"+accountId);
  }

  public debit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/debit",data);
  }

  public credit(accountId : string, amount : number, description:string){
    let data={accountId : accountId, amount : amount, description : description}
    return this.http.post(environment.backendHost+"/accounts/credit",data);
  }

  public transfer(accountSource: string,accountDestination: string, amount : number, description:string){
    let data={accountSource, accountDestination, amount, description }
    return this.http.post(environment.backendHost+"/accounts/transfer",data);
  }

  public getAccountsByCustomer(customerId : string, page : number, size : number): Observable<Array<AccountDetails>>{
    return this.http.get<Array<AccountDetails>>(environment.backendHost+"/customerAccounts/"+customerId);
  }

}

