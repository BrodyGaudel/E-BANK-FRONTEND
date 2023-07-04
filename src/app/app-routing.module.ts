import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListCustomerComponent} from "./components/list-customer/list-customer.component";
import {DetailsCustomerComponent} from "./components/details-customer/details-customer.component";
import {UpdateCustomerComponent} from "./components/update-customer/update-customer.component";
import {AddCustomerComponent} from "./components/add-customer/add-customer.component";
import {ListAccountsCustomerComponent} from "./components/list-accounts-customer/list-accounts-customer.component";
import {AddAccountComponent} from "./components/add-account/add-account.component";
import {AccountsComponent} from "./components/accounts/accounts.component";

const routes: Routes = [
  {path: '', redirectTo: 'accounts', pathMatch: 'full' },
  {path: 'list-customers', component: ListCustomerComponent},
  {path: 'details-customer/:id', component: DetailsCustomerComponent},
  {path: 'update-customer/:id', component: UpdateCustomerComponent},
  {path: 'add-customer', component: AddCustomerComponent},
  {path: 'add-accounts-customer/:id', component: ListAccountsCustomerComponent},
  {path: 'add-account/:id', component: AddAccountComponent},
  {path: 'accounts', component: AccountsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
