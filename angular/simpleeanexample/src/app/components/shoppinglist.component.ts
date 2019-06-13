import {Component, OnInit} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';
import {ShoppingService} from '../services/shoppingservice.service';

@Component({
	selector:'shoppinglist',
	templateUrl:'./shoppinglist.component.html',
	styleUrls:['./shoppinglist.component.css']
})
export class ShoppingList implements OnInit {
	
	public shoppinglist:ShoppingItem[] = []
	private currentIndex:number = -1;
	private mode:string = "normal";
	
	constructor(private _shoppingService:ShoppingService) {}
	
	ngOnInit() {
		this.getList();
	}
	
	getList() {
		this.shoppinglist = this._shoppingService.getList();
	}
	

	removeFromList(idx) {
		this._shoppingService.removeFromList(idx);
		this.getList();
	}
	
	editItem(idx) {
		//this.shoppingitem = this.shoppinglist[idx];
	}
	
	onNormalrowButtonClick(data) {
		if(data.type === "remove") {
			this.currentIndex = data.index;
			this.mode = "remove";
		} else {
			this.currentIndex = data.index;
			this.mode = "edit";
		}
	}
	
	onRemoverowButtonClick(data) {
		this.currentIndex = -1;
		this.mode = "normal";
		if(data.type === "ok") {
			this.removeFromList(data.index);
		} 
	}
}