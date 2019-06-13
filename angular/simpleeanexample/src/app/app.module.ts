import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingService} from './services/shoppingservice.service';
import {ShoppingForm} from './components/shoppingform.component';
import {AppRoutingModule} from './app-routing.module';
import {NormalRow} from './components/normalrow.component';
import {RemoveRow} from './components/removerow.component';
import {LoginService} from './services/loginservice.service';
import {LoginForm} from './components/loginform.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
	ShoppingList,
	ShoppingForm,
	NormalRow,
	RemoveRow,
	LoginForm
  ],
  imports: [
    BrowserModule,
	FormsModule,
	AppRoutingModule,
	NgbModule,
	HttpClientModule
  ],
  providers: [ShoppingService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
