import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingForm} from './components/shoppingform.component';
import {LoginForm} from './components/loginform.component';

const routes: Routes = [
	{path:"list", component:ShoppingList},
	{path:"form", component:ShoppingForm},
	{path:"loginpage", component:LoginForm},
	{path:"",redirectTo:"/loginpage", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
