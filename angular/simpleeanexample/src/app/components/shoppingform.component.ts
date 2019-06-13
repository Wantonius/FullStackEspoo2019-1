import {Component, OnInit} from '@angular/core';
import {ShoppingService} from '../services/shoppingservice.service';
import {ShoppingItem} from '../models/shoppingitem.model';
import {LoginService} from '../services/loginservice.service';
import {Router} from '@angular/router';
@Component({
	selector:'shoppingform',
	templateUrl:'./shoppingform.component.html'
})
export class ShoppingForm implements OnInit{	
	public shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	
	constructor(private _shoppingService:ShoppingService, private _login:LoginService, private _router:Router) {}
	
	ngOnInit() {
		if(!this._login.isUserLogged()) {
			this._router.navigate(['/login']);
		}
	}
	
	addToList() {
		this._shoppingService.addToList(this.shoppingitem);
		this.shoppingitem = new ShoppingItem("",0,0,0);
	}

}