import {Component} from '@angular/core';
import {ShoppingItem} from '../models/shoppingitem.model';

@Component({
	selector:'shoppinglist',
	templateUrl:'./shoppinglist.component.html',
	styleUrls:['./shoppinglist.component.css']
})
export class ShoppingList {
	private id:number = 100;
	public shoppingitem:ShoppingItem = new ShoppingItem("",0,0,0);
	public shoppinglist:ShoppingItem[] = []
	public mode:string = "Add";
	
	addToList() {
		if(this.shoppingitem.id === 0) {
			this.shoppingitem.id = this.id;
			this.id++;
			this.shoppinglist.push(this.shoppingitem);
		} else {
			for(let i=0;i<this.shoppinglist.length;i++) {
				if(this.shoppinglist[i].id === this.shoppingitem.id) {
					this.shoppinglist.splice(i,1,this.shoppingitem);
				}
			}
			this.mode = "Add";
		}
		this.shoppingitem = new ShoppingItem("",0,0,0);
	}
	
	removeFromList(idx) {
		this.shoppinglist.splice(idx,1);
	}
	
	editItem(idx) {
		this.mode === "Edit";
		this.shoppingitem = this.shoppinglist[idx];
	}
}