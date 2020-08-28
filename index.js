var randomNumber1= Math.floor(Math.random()*6)+1; //to get number from 1 to 6
var randomDiceImage="dice" + randomNumber1 + ".png"; //to get different dice images
var randomImageSource = "images/" + randomDiceImage ; //images will get randomised
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);



var randomNumber2= Math.floor(Math.random()*6)+1; //to get number from 1 to 6
//var randomDiceImage="dice" + randomNumber2 + ".png"; //to get different dice images
var randomImageSource2 = "images/dice" + randomNumber2 +".png"; //images will get randomised
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){

  document.querySelector("h1").innerHTML=" Player 1 WINS!";
}
else if(randomNumber2>randomNumber1){

  document.querySelector("h1").innerHTML=" Player 2 WINS!";
}
else{
  document.querySelector("h1").innerHTML=" That's Tie. Not SHASHANK's fault!";

}
