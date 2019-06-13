import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable()
export class LoginService {

	private isLogged:boolean = false;
	private token:string = "";
	
	constructor(private _http:HttpClient) {}
	
	register(username:string, password:string) {
		const user = {
			"username":username,
			"password":password
		}
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type":"application/json"
			})
		}
		return this._http.post("/a/register",user,httpOptions);
	}
	
	login(username:string, password:string) {
		console.log("login");
		this.isLogged = true;
	}
	
	logout() {
		this.isLogged = false;
	}

	setLogin(login:boolean) {
		this.isLogged = login;
	}
	
	isUserLogged() {
		return this.isLogged;
	}
	
	getToken() {
		return this.token;
	}
}