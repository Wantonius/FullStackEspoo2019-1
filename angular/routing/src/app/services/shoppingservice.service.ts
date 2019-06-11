import {Injectable} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';

@Injectable()
export class ShoppingService {

	private id:number = 100;
	private shoppinglist:ShoppingItem[] = [];
	
	getList() {
		return this.shoppinglist;
	}
	
	addToList(shoppingitem:ShoppingItem) {
		if(shoppingitem.id === 0) {
			shoppingitem.id = this.id;
			this.id++;
			this.shoppinglist.push(shoppingitem);
		} else {
			for(let i=0;i<this.shoppinglist.length;i++) {
				if(this.shoppinglist[i].id === shoppingitem.id) {
					this.shoppinglist.splice(i,1,shoppingitem);
				}
			}
		}		
	}
	
	removeFromList(idx) {
		this.shoppinglist.splice(idx,1);
	}
}