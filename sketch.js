var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player, allPlayers, school, up, upil, allUsers, users;
var schoolCount;
var gline, grline;
var home, Menu;
var gameState = 1;
var gameState = 2;
var gameState = 3;

function preload() {
  backgroundImage = loadImage("backdrop.jpg");
  menu = loadImage("menu.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  //  Menu = new menuImage();
  //Menu.display();
  if (gameState = 1) {
    home = new homePage();
    home.display();
  }

}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
