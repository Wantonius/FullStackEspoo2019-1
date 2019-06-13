import {Component} from '@angular/core'
import {GameMechanics} from '../gameservice/gamemechanics.service'
import {Router} from '@angular/router'

@Component({
	selector:"gamescreen",
	templateUrl:"./gamescreen.component.html"
})
export class GameScreen {
	
	public guesses:number;
	public currentGuess:number;
	public currentLow:number;
	public currentHigh:number;
	public message:string;
	constructor(private _game:GameMechanics, private _router:Router) {
		this.guesses = 0;
		this.currentLow = 1;
		this.currentHigh = 100;
		this.message="Please enter a number between 1 and 100";
	}

	
	
	guess() {
		if(isNaN(this.currentGuess)) {
			this.message="Please enter a NUMBER!";
			return;
		}
		if(this.currentGuess > this.currentHigh) {
			this.message="Guess was above the current high guess. Try again!";
			return;
		}
		if(this.currentGuess < this.currentLow) {
			this.message="Guess was below the current low guess. Try again!";
			return;
		}
		let temp = this._game.runGame(this.currentGuess);
		if(temp.type==="low") {
			this.message = "Guess was too low. Low limit now:"+this.currentGuess+". Try again!";
			this.guesses = temp.guesses;
			this.currentLow = this.currentGuess;
			this.currentGuess = 0;
			return;
		}
		if(temp.type==="high") {
			this.message = "Guess was too high. High limit now:"+this.currentGuess+". Try again!";
			this.guesses = temp.guesses;
			this.currentHigh = this.currentGuess;
			this.currentGuess = 0;
			return;
		}
		if(temp.type==="win") {
			alert("You win in "+temp.guesses+" guesses! Congrats!");
			this.guesses = 0;
			this.currentLow = 0;
			this.currentHigh = 101;
			this.message="Please enter a number between 1 and 100";
			this._router.navigate(['/start']);
		}
	}
}