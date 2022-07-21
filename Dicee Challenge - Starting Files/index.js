var randomNumber1 = Math.floor(Math.random() *6) +1;

var randomimage = "images/dice"+ randomNumber1 +  ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomimage);

var randomNumber2= Math.ceil(Math.random()*6);

switch(randomNumber2){
  case 1:
    document.querySelector(".img2").setAttribute("src", "images/dice1.png");
    break;

  case 2:
    document.querySelector(".img2").setAttribute("src", "images/dice2.png");
    break;

  case 3:
    document.querySelector(".img2").setAttribute("src", "images/dice3.png");
    break;

  case 4:
    document.querySelector(".img2").setAttribute("src", "images/dice4.png");
    break;

  case 5:
    document.querySelector(".img2").setAttribute("src", "images/dice5.png");
    break;

  case 6:
    document.querySelector(".img2").setAttribute("src", "images/dice6.png");
    break;
}

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player1 wins";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent="Player2 wins";
}
else{
document.querySelector("h1").innerHTML="Draw";
}
