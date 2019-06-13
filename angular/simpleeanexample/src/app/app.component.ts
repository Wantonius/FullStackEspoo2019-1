import { Component } from '@angular/core';
import {LoginService} from './services/loginservice.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(private _login:LoginService, private _router:Router) {}

	isUserLogged() {
		return this._login.isUserLogged();
	}

	logout() {
		this._login.logout().subscribe(
			data => console.log(data.message),
			error => console.log(error.message),
			() => {
				this._login.setLogin(false,"");
				this._router.navigate(['/loginpage']);
			}
		);
	}

}
