import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

import { AppComponent } from './app.component';
import {ShoppingList} from './components/shoppinglist.component';
import {ShoppingService} from './services/shoppingservice.service';


@NgModule({
  declarations: [
    AppComponent,
	ShoppingList
  ],
  imports: [
    BrowserModule,
	FormsModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
