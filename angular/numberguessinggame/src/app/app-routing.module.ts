import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameScreen} from './components/gamescreen.component';
import { StartScreen} from './components/startscreen.component';

const routes: Routes = [
	{path:"start", component:StartScreen},
	{path:"game", component:GameScreen},
	{path:"", redirectTo:"/start", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
