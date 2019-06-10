import {Component} from '@angular/core';

@Component({
	selector:'bucket',
	templateUrl:'./bucket.component.html'
})
export class Bucket {
	
	message:string = "";
	
	transmitMessage(value:string) {
		this.message = value + " apple says hello!";
	}
}