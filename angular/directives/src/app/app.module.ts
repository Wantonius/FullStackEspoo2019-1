import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ContactList} from './contactlist.component';
import {ConditionalRender} from './conditional.component';

@NgModule({
  declarations: [
    AppComponent,
	ContactList,
	ConditionalRender
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
