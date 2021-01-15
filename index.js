
var n = Math.random() * 6;
n = Math.floor(n) + 1;
//alert(n);

var y = Math.random() * 6;
y= Math.floor(y) + 1;
//alert(y);
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + n + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + y + ".png");

if(n > y)
{
    
    document.querySelector("h1").innerText = "Player 1 wins";
}
else if( n == y)
{
    document.querySelector("h1").innerText = "Player 2 wins";
}

else
{
    document.querySelector("h1").innerText = "its a draw";
}
