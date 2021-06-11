var player1 = Math.floor(Math.random() * 6) + 1;
var image1 = "images\\dice" + player1 + ".png"
document.querySelector("img.img1").setAttribute("src", image1);
var player2 = Math.floor(Math.random() * 6) + 1;
var image2 = "images\\dice" + player2 + ".png"
document.querySelector("img.img2").setAttribute("src", image2);


if (player1 > player2) {
  document.querySelector("h1").textContent = "Player 1 wins";
} else if (player1 < player2) {
  document.querySelector("h1").textContent = "Player 2 wins";
} else {
  document.querySelector("h1").textContent = "Draw";
}
