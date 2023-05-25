import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import{AdminComponent}from'./admin/admin.component'
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { GetUsersComponent } from './admin/get-users/get-users.component';
import { ProductComponent } from './product/product.component';
const routes: Routes = [

  {
    path:'adminlogin',
    component:AdminloginComponent
 
   },

  {
   path:'admin',
   component:AdminComponent

  },
  {
    path:'up',
    component:SignupComponent
  },{
    path:'in',
    component:SigninComponent
  },{
    path:'home',
    component:HomeComponent
   },{
    path:'admin/getusers',
    component:GetUsersComponent
  },{
    path:'products',
    component:ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
