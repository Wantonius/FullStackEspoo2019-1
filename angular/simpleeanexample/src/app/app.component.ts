import { Component } from '@angular/core';
import {LoginService} from './services/loginservice.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private _login:LoginService) {}

	isUserLogged() {
		return this._login.isUserLogged();
	}

	logout() {
		this._login.logout();
	}

}
