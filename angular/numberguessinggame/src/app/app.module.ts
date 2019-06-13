import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameScreen} from './components/gamescreen.component';
import { StartScreen} from './components/startscreen.component';
import {GameMechanics} from './gameservice/gamemechanics.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
	GameScreen,
	StartScreen,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule
  ],
  providers: [GameMechanics],
  bootstrap: [AppComponent]
})
export class AppModule { }
