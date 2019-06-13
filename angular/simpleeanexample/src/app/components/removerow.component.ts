import {Component, Input, Output, EventEmitter} from '@angular/core'
import {ShoppingItem} from '../models/shoppingitem.model';

@Component({
	selector:'remove-row',
	templateUrl:'./removerow.component.html'
})
export class RemoveRow {
	@Input() item:ShoppingItem;
	@Input() index:number;
	@Output() buttonClicked = new EventEmitter();
	
	onCancelButtonClick() {
		this.buttonClicked.emit({"type":"cancel","index":this.index});
	}
	
	onOkButtonClick() {
		this.buttonClicked.emit({"type":"ok","index":this.index});
	}
}
