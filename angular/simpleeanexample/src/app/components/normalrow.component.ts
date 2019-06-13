import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ShoppingItem} from '../models/shoppingitem.model';

@Component({
	selector:'normal-row',
	templateUrl:'./normalrow.component.html'
})
export class NormalRow {
	@Input() item:ShoppingItem;
	@Input() index:number;
	@Output() buttonClicked = new EventEmitter();
	
	onRemoveButtonClick() {
		this.buttonClicked.emit({"type":"remove","index":this.index});
	}
	
	onEditButtonClick() {
		this.buttonClicked.emit({"type":"edit","index":this.index});
	}
}



