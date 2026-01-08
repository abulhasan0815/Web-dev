let homeScore = 0;
let guestScore = 0;

function homeAddOne() {
  homeScore += 1;
  document.getElementById("homecount").textContent = homeScore;
}

function homeAddTwo() {
  homeScore += 2;
  document.getElementById("homecount").textContent = homeScore;
}

function homeAddThree() {
  homeScore += 3;
    document.getElementById("homecount").textContent = homeScore;
}

function guestAddOne() {
  guestScore += 1;
  document.getElementById("guestcount").textContent = guestScore;
}

function guestAddTwo() {
  guestScore += 2;
  document.getElementById("guestcount").textContent = guestScore;
}

function guestAddThree() {
  guestScore += 3;
    document.getElementById("guestcount").textContent = guestScore;
}