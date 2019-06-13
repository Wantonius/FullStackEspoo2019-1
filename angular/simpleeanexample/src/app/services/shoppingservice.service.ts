import {Injectable} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {LoginService} from './loginservice.service';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {BackendMessage} from '../models/backendmessage.model';

@Injectable()
export class ShoppingService {

	constructor(private _login:LoginService, private _http:HttpClient) {}
	
	
	getList() {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-type":"application/json",
				"token":this._login.getToken()
			})
		}
		return this._http.get<ShoppingItem[]>("/a/api/shoppinglist",httpOptions);
	}
	
	addToList(shoppingitem:ShoppingItem) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-type":"application/json",
				"token":this._login.getToken()
			})
		}
		return this._http.post<BackendMessage>("/a/api/shoppinglist",shoppingitem,httpOptions);		
	}
	
	removeFromList(id) {
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-type":"application/json",
				"token":this._login.getToken()
			})
		}
		return this._http.delete<BackendMessage>("/a/api/shoppinglist/"+id,httpOptions);		
		
	}
}