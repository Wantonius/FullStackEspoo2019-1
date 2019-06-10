import { Component} from '@angular/core';

@Component({
	selector:'contactlist',
	templateUrl:'./contactlist.component.html'
})
export class ContactList {

	contactList = [
	{
		"firstname": "Kelly",
		"lastname": "Hayden"
	},
	{
		"firstname": "Yuli",
		"lastname": "Fitzpatrick"
	},
	{
		"firstname": "Erin",
		"lastname": "Dotson"
	},
	{
		"firstname": "Lacy",
		"lastname": "Salas"
	},
	{
		"firstname": "Carter",
		"lastname": "Dunn"
	},
	{
		"firstname": "Courtney",
		"lastname": "Alvarez"
	},
	{
		"firstname": "Althea",
		"lastname": "Frazier"
	},
	{
		"firstname": "Quinn",
		"lastname": "Barrett"
	},
	{
		"firstname": "Caleb",
		"lastname": "Mays"
	},
	{
		"firstname": "Hakeem",
		"lastname": "Talley"
	},
	{
		"firstname": "Basia",
		"lastname": "Bright"
	},
	{
		"firstname": "Kyle",
		"lastname": "Steele"
	},
	{
		"firstname": "Carson",
		"lastname": "Floyd"
	},
	{
		"firstname": "Claire",
		"lastname": "Wright"
	},
	{
		"firstname": "Velma",
		"lastname": "Justice"
	},
	{
		"firstname": "Velma",
		"lastname": "Walsh"
	},
	{
		"firstname": "Jocelyn",
		"lastname": "Howell"
	},
	{
		"firstname": "Madonna",
		"lastname": "Sharp"
	},
	{
		"firstname": "Myles",
		"lastname": "Sparks"
	},
	{
		"firstname": "Amery",
		"lastname": "Lester"
	},
	{
		"firstname": "Oleg",
		"lastname": "Strickland"
	},
	{
		"firstname": "Lewis",
		"lastname": "Singleton"
	},
	{
		"firstname": "Galena",
		"lastname": "Gallagher"
	},
	{
		"firstname": "Sarah",
		"lastname": "Norris"
	},
	{
		"firstname": "Claire",
		"lastname": "Hubbard"
	},
	{
		"firstname": "Signe",
		"lastname": "Poole"
	},
	{
		"firstname": "Elliott",
		"lastname": "Kennedy"
	},
	{
		"firstname": "Shana",
		"lastname": "Rose"
	},
	{
		"firstname": "Ori",
		"lastname": "Beasley"
	},
	{
		"firstname": "Imogene",
		"lastname": "Stanton"
	},
	{
		"firstname": "Charde",
		"lastname": "Franks"
	},
	{
		"firstname": "Emily",
		"lastname": "Washington"
	},
	{
		"firstname": "Derek",
		"lastname": "Stephenson"
	},
	{
		"firstname": "Lee",
		"lastname": "Rush"
	},
	{
		"firstname": "Shaeleigh",
		"lastname": "Blackburn"
	},
	{
		"firstname": "Ahmed",
		"lastname": "Massey"
	},
	{
		"firstname": "Nicole",
		"lastname": "Whitley"
	},
	{
		"firstname": "Eden",
		"lastname": "Wiley"
	},
	{
		"firstname": "Harper",
		"lastname": "Burks"
	},
	{
		"firstname": "Levi",
		"lastname": "Hurley"
	},
	{
		"firstname": "Ethan",
		"lastname": "Salazar"
	},
	{
		"firstname": "Sacha",
		"lastname": "Stuart"
	},
	{
		"firstname": "Slade",
		"lastname": "Spears"
	},
	{
		"firstname": "Barrett",
		"lastname": "Foley"
	},
	{
		"firstname": "Chaim",
		"lastname": "Santos"
	},
	{
		"firstname": "Aquila",
		"lastname": "Poole"
	},
	{
		"firstname": "Lilah",
		"lastname": "Butler"
	},
	{
		"firstname": "Brynn",
		"lastname": "Murphy"
	},
	{
		"firstname": "Erin",
		"lastname": "Haynes"
	},
	{
		"firstname": "Hadassah",
		"lastname": "Brennan"
	},
	{
		"firstname": "Lewis",
		"lastname": "Mathews"
	},
	{
		"firstname": "Sophia",
		"lastname": "Bartlett"
	},
	{
		"firstname": "Cain",
		"lastname": "Moon"
	},
	{
		"firstname": "Rigel",
		"lastname": "Clemons"
	},
	{
		"firstname": "Linda",
		"lastname": "Moran"
	},
	{
		"firstname": "Norman",
		"lastname": "Wagner"
	},
	{
		"firstname": "Quin",
		"lastname": "Mcleod"
	},
	{
		"firstname": "Logan",
		"lastname": "Preston"
	},
	{
		"firstname": "Tamara",
		"lastname": "Ross"
	},
	{
		"firstname": "Rhoda",
		"lastname": "Weber"
	},
	{
		"firstname": "Madeline",
		"lastname": "Washington"
	},
	{
		"firstname": "Ina",
		"lastname": "Everett"
	},
	{
		"firstname": "Halee",
		"lastname": "Burris"
	},
	{
		"firstname": "Moses",
		"lastname": "Hudson"
	},
	{
		"firstname": "Nasim",
		"lastname": "Stone"
	},
	{
		"firstname": "Neve",
		"lastname": "Lane"
	},
	{
		"firstname": "Acton",
		"lastname": "Combs"
	},
	{
		"firstname": "Blake",
		"lastname": "Abbott"
	},
	{
		"firstname": "Maisie",
		"lastname": "Diaz"
	},
	{
		"firstname": "Abel",
		"lastname": "Flowers"
	},
	{
		"firstname": "Mannix",
		"lastname": "Fitzgerald"
	},
	{
		"firstname": "Chiquita",
		"lastname": "Acevedo"
	},
	{
		"firstname": "Jasmine",
		"lastname": "Harrell"
	},
	{
		"firstname": "Branden",
		"lastname": "Sherman"
	},
	{
		"firstname": "McKenzie",
		"lastname": "Jensen"
	},
	{
		"firstname": "Abel",
		"lastname": "Shepherd"
	},
	{
		"firstname": "Victoria",
		"lastname": "Craft"
	},
	{
		"firstname": "Giselle",
		"lastname": "Kim"
	},
	{
		"firstname": "Ralph",
		"lastname": "Padilla"
	},
	{
		"firstname": "Allistair",
		"lastname": "Russell"
	},
	{
		"firstname": "Cadman",
		"lastname": "Velez"
	},
	{
		"firstname": "Alan",
		"lastname": "Mcfarland"
	},
	{
		"firstname": "Hadassah",
		"lastname": "Harding"
	},
	{
		"firstname": "Chancellor",
		"lastname": "Leach"
	},
	{
		"firstname": "Beau",
		"lastname": "Morales"
	},
	{
		"firstname": "Deacon",
		"lastname": "Bishop"
	},
	{
		"firstname": "Cullen",
		"lastname": "Aguilar"
	},
	{
		"firstname": "Nayda",
		"lastname": "Rodgers"
	},
	{
		"firstname": "Kirby",
		"lastname": "Gay"
	},
	{
		"firstname": "Brady",
		"lastname": "Massey"
	},
	{
		"firstname": "Phyllis",
		"lastname": "Acevedo"
	},
	{
		"firstname": "Emerson",
		"lastname": "Bruce"
	},
	{
		"firstname": "Lewis",
		"lastname": "Hicks"
	},
	{
		"firstname": "Shoshana",
		"lastname": "Roberts"
	},
	{
		"firstname": "Laura",
		"lastname": "Lewis"
	},
	{
		"firstname": "Candace",
		"lastname": "Luna"
	},
	{
		"firstname": "Reed",
		"lastname": "Mack"
	},
	{
		"firstname": "Addison",
		"lastname": "Robles"
	},
	{
		"firstname": "Lamar",
		"lastname": "Smith"
	},
	{
		"firstname": "Quail",
		"lastname": "Sherman"
	}
];

}