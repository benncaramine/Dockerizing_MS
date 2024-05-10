import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ProfileComponent} from "./profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentsComponent} from "./students/students.component";
import {PaymentsComponent} from "./payments/payments.component";
import {LoadStudentsComponent} from "./load-students/load-students.component";
import {LoadPaymentsComponent} from "./load-payments/load-payments.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthGuard} from "./guards/auth.guard";
import {AuthorizationGuard} from "./guards/authorization.guard";
import {GptComponent} from "./gpt/gpt.component";
import {MsidComponent} from "./msid/msid.component";
import {RegisterComponent} from "./register/register.component";


const routes: Routes = [
  {path : "", component : LoginComponent},
  {path : "login", component : LoginComponent},
  {path : "register", component : RegisterComponent},
  {path : "admin", component : AdminTemplateComponent, canActivate : [AuthGuard],

    children : [
      {path : "home", component : HomeComponent},
      {path : "profile", component : ProfileComponent},
      {path : "dashboard", component : DashboardComponent},
      {path : "students", component : StudentsComponent},
      {path : "payments", component : PaymentsComponent},
      {path : "loadStudents", component : LoadStudentsComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']}},
      {path : "loadPayments", component : LoadPaymentsComponent,
        canActivate : [AuthorizationGuard], data : {roles : ['ADMIN']} },
      {path : "gpt", component : GptComponent},
      {path : "msid", component : MsidComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
