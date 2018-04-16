var card1 = document.getElementsByClassName("wrap1");
var card2 = document.getElementsByClassName("wrap2");
var card3 = document.getElementsByClassName("wrap3");
var card4 = document.getElementsByClassName("wrap4");
var card5 = document.getElementsByClassName("wrap5");
var card6 = document.getElementsByClassName("wrap6");

var num1 = 0;
var num2 = 0;
var num3 = 0;
var num4 = 0;
var num5 = 0;
var num6 = 0;
 
setInterval(() => {
    num1 = num1 + 1;
    card1[0].innerHTML = "";
    card1[0].innerHTML = `<div class="card card1"><div class="one" id="no">${(num1 > 9) ? 0 : num1}</div>`;
  
  if (num1 == 10) {
    num2 = num2 + 1
    card2[0].innerHTML = `<div class="card card2"><div class="two" id="no">${(num2 > 9) ? 0 : num2}</div>`;
    

    num1 = 0;

  }
  if (num2 == 10) {
    num3 = num3 + 1
    card3[0].innerHTML = `<div class="card card3"><div class="three" id="no">${(num3 > 9) ? 0 : num3}</div>`;
    

    num2 = 0;

  }
  if (num3 == 10) {
    num4 = num4 + 1
    card4[0].innerHTML = `<div class="card card3"><div class="four" id="no">${(num4 > 9) ? 0 : num4}</div>`;
    

    num3 = 0;

  }
  if (num4 == 10) {
    num5 = num5 + 1
    card5[0].innerHTML = `<div class="card card4"><div class="five" id="no">${(num5 > 9) ? 0 : num5}</div>`;
    

    num4 = 0;

  }
  if (num5 == 10) {
    num6 = num6 + 1
    card6[0].innerHTML = `<div class="card card2"><div class="two" id="no">${(num6 > 9) ? 0 : num6}</div>`;
    

    num5 = 0;

  }
  
  if (
        num1 == 9 &&
        num2 == 9 &&
        num3 == 9 &&
        num4 == 9 &&
        num5 == 9 &&
        num6 == 9
    ) {
    alert('COUNT EXCEEDED');
  }

  
}, 3000)