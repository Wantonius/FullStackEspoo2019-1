import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/loginservice.service';
import {Router} from '@angular/router';

@Component({
	selector:'loginform',
	templateUrl:'./loginform.component.html'
})
export class LoginForm implements OnInit{

	username:string = "";
	password:string = "";
	message:string = "";
	
	constructor(private _login:LoginService, private _router:Router){}

	ngOnInit() {
		if(this._login.isUserLogged()) {
			this._router.navigate(['/list']);
		}
	}
	
	login() {
		if(this.username.length < 4 || this.password.length < 8) {
			this.message = "Username must be atleast 4 characters and password 8 characters long!";
			return;
		}
		this._login.login(this.username,this.password).subscribe(
			data => {
				this.message = data.message;
				this._login.setLogin(true,data.token);
				this._router.navigate(['/list']);				
				},
			error => this.message = error.message,
			() => console.log("login complete")
		);

	}

	register() {
		if(this.username.length < 4 || this.password.length < 8) {
			this.message = "Username must be atleast 4 characters and password 8 characters long!";
			return;
		}
		this._login.register(this.username,this.password).subscribe(
			data => this.message = data.message,
			error => this.message = error.message,
			() => console.log("register complete")
		);
	}
}