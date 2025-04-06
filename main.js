const audio = document.getElementById("myAudio");
let int_1 = document.getElementById("intro_1");
let int_2 = document.getElementById("intro_2");
let blckscrn = document.getElementById("blackscreen");
let opening = document.getElementById("first_screen");
let warn = document.getElementById("second_screen");
var menu = document.getElementById("menu");


window.onload = function () {
  setTimeout(function () {
    int_1.style.animation = "appear 5s ease";
  }, 2000);
  setTimeout(function () {
    int_2.style.animation = "appear 6s ease";
    blckscrn.style.background = "#fff";
  }, 7000);
  setTimeout(function () {
    blckscrn.style.background = "#000";
    opening.style.display = "none";
  }, 14000);
  setTimeout(function () {
    warn.style.animation = "appear_2 10s ease";
  }, 15000);
  setTimeout(function () {
    blckscrn.style.display = "none";
  }, 25000);
  setTimeout(function (){
    menu.style.display = "block";
  }, 27000);
  setTimeout(function() {
  document.getElementById("loading_ani").style.display = "block";
  }, 29000);
  setTimeout(function() {
  document.getElementById("google").style.display = "block";
  document.getElementById("guest").style.display = "block";
  document.getElementById("loading_ani").style.display = "none";
  }, 33000);
}

function myLogin() {
  alert('This is a Beta version cloudsaves are currently disabled sorry')
}

function guest() {
  window.location.replace('scene_1.html');
}

window.onclick = function() {
  audio.play();
  audio.volume = 0.7;
}