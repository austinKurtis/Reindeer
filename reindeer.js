var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];
let amount = reindeer.length;

let currentReindeer = "";
let currentColor = "";
let combined = ""
var hohohoElement = document.getElementById("reindeer");

for(var i = 0; i < amount; i++){

	currentColor = colors[i];
	currentReindeer = reindeer[i];
	combined += "<li>" + currentColor + " " + currentReindeer + "</li>"
	hohohoElement.innerHTML = combined;
}