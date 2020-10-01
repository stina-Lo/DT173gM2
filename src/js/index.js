"use strict";

es6 = () => {
  console.log("es6 syntax working")
}

var open = 0;

function toggleOpen(burgerId, elementId, displayValue) {
  var htmlElement = document.getElementById(elementId);
  var burgerBun = document.getElementById(burgerId).children;

  if (open !== 0) {
    for (var i = 0; i < burgerBun.length; i++) {
      if (i == 0) {
        burgerBun[i].style.transform = "rotate(0)";
      } else if (i == 1) {
        burgerBun[i].style.opacity = "1";
        burgerBun[i].style.transform = "translateX(0)";
      } else {
        burgerBun[i].style.transform = "rotate(0)";
      }
    }

    htmlElement.style.transform = "translateX(-100%)";
    open = 0;
  } else {
    for (var _i = 0; _i < burgerBun.length; _i++) {
      if (_i == 0) {
        burgerBun[_i].style.transform = "rotate(45deg)";
      } else if (_i == 1) {
        burgerBun[_i].style.opacity = "0";
        burgerBun[_i].style.transform = "translateX(20px)";
      } else {
        burgerBun[_i].style.transform = "rotate(-45deg)";
      }
    }

    htmlElement.style.transform = "translateX(0)";
    open = 1;
  }
}