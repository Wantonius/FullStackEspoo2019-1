import {Injectable} from '@angular/core';

export class GameMechanics {

	private currentTarget:number;
	private numberOfGuesses:number;
	private playerName:string;
	private topList = [];
	
	constructor() {
		this.currentTarget = 0;
		this.numberOfGuesses = 0;
		this.playerName = "";
	}

	startGame(name:string) {
		if(localStorage.getItem("toplist")) {
			this.topList = JSON.parse(localStorage.getItem("toplist"));
		}
		this.playerName = name;
		this.numberOfGuesses = 0;
		this.currentTarget = Math.floor(Math.random()*100)+1;
	}
	
	runGame(guess:number) {
		this.numberOfGuesses++;
		if(guess === this.currentTarget) {
			let winObject = {
				type:"win",
				guesses:this.numberOfGuesses
			} 
			this.topList.push({
				name:this.playerName,
				score:this.numberOfGuesses
			})
			this.topList = this.sortTopList(this.topList);
			localStorage.setItem("toplist",JSON.stringify(this.topList));
			this.playerName = "";
			this.numberOfGuesses = 0;
			this.currentTarget = 0;
			return winObject;
		}
		if(guess > this.currentTarget) {
			return {
				type:"high",
				guesses:this.numberOfGuesses
			}
		}
		if(guess < this.currentTarget) {
			return {
				type:"low",
				guesses:this.numberOfGuesses
			}
		}
	}
	

	sortTopList(inputArray) {
		let len = inputArray.length-1;
		for (let i = 0; i < len; i++) {
			for (let j = 0; j < len; j++) {
				if (inputArray[j].score > inputArray[j + 1].score) {
					let tmp = inputArray[j];
					inputArray[j] = inputArray[j + 1];
					inputArray[j + 1] = tmp;
				}
			}
		}		
		return inputArray;
	}

}