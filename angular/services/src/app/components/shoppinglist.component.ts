import {Component, OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:'shoppinglist',
	templateUrl:'./shoppinglist.component.html',
	styleUrls:['./shoppinglist.component.css']
})
export class ShoppingList implements OnInit {
	public shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	public shoppinglist:ShoppingItem[] = []
	public mode = "Add"
	
	constructor(private _shoppingService:ShoppingService) {}
	
	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.shoppinglist = this._shoppingService.getList();
	}
	
	addToList() {
		this._shoppingService.addToList(this.shoppingitem);
		this.shoppingitem = new ShoppingItem("",0,0,0);
		this.getList();
		this.mode="Add";
	}
	
	removeFromList(idx) {
		this._shoppingService.removeFromList(idx);
		this.getList();
	}
	
	editItem(idx) {
		this.shoppingitem = this.shoppinglist[idx];
		this.mode="Edit";
	}
}