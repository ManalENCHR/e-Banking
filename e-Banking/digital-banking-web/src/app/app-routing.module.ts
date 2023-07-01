import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsComponent} from "./accounts/accounts.component";
import {CustomersComponent} from "./customers/customers.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {CustomerAccountsComponent} from "./customer-accounts/customer-accounts.component";
import {AccountOperationsComponent} from "./account-operations/account-operations.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";

const routes: Routes = [
  { path :"customers", component : CustomersComponent},
  { path :"accounts", component : AccountsComponent},
  { path :"new-customer", component : NewCustomerComponent},
  { path :"customer-accounts/:id", component : CustomerAccountsComponent},
  { path :"account-operations/:id", component: AccountOperationsComponent },
  { path :"edit-customer/:id", component : EditCustomerComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
