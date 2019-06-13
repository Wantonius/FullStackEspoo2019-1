import {Component} from '@angular/core';
import {ShoppingService} from '../services/shoppingservice.service';
import {ShoppingItem} from '../models/shoppingitem.model';

@Component({
	selector:'shoppingform',
	templateUrl:'./shoppingform.component.html'
})
export class ShoppingForm {	
	public shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	
	constructor(private _shoppingService:ShoppingService) {}

	addToList() {
		this._shoppingService.addToList(this.shoppingitem);
		this.shoppingitem = new ShoppingItem("",0,0,0);
	}

}