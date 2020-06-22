var randomnumber1 = Math.floor(Math.random()*6 +1);
var imgnumber1 = "images/dice"+randomnumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgnumber1);

var randomnumber2 = Math.floor(Math.random()*6 +1);
var imgnumber2 = "images/dice"+randomnumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",imgnumber2);

if(randomnumber1>randomnumber2)
document.querySelector("h1").innerHTML="Player 1 Wins";
if(randomnumber1<randomnumber2)
document.querySelector("h1").innerHTML="Player 2 Wins";
if(randomnumber1==randomnumber2)
document.querySelector("h1").innerHTML="Draw";
