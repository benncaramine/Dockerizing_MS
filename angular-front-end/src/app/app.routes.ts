import { Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {KeysComponent} from "./keys/keys.component";
import {HomeComponent} from "./home/home.component";
import {GptComponent} from "./gpt/gpt.component";

export const routes: Routes = [
  { path : "customers" , component : CustomersComponent},
  { path : "accounts", component : AccountsComponent},
  { path : "keys", component : KeysComponent},
  { path : "home", component : HomeComponent},
  { path : "gpt", component : GptComponent},

];
