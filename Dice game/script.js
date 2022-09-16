console.log("Welcome to Dice Game")

roll.addEventListener('click', (e)=>{
var a=Math.floor(Math.random() * 6)+1;
var diceonesrc=a+".png";

var b=Math.floor(Math.random() * 6)+1;
var dicetwosrc=b+".png";

document.querySelectorAll("img")[0].setAttribute("src",diceonesrc);
document.querySelectorAll("img")[1].setAttribute("src",dicetwosrc);

if(a>b){
    document.querySelector("h3").innerHTML="Player 1 wins!";
}
else if(a<b){
    document.querySelector("h3").innerHTML="Player 2 wins!";
}
else{
    document.querySelector("h3").innerHTML="DRAW!";
}

})