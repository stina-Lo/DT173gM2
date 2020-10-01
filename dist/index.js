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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZXM2ID0gKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImVzNiBzeW50YXggd29ya2luZ1wiKVxufVxuXG52YXIgb3BlbiA9IDA7XG5cbmZ1bmN0aW9uIHRvZ2dsZU9wZW4oYnVyZ2VySWQsIGVsZW1lbnRJZCwgZGlzcGxheVZhbHVlKSB7XG4gIHZhciBodG1sRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIHZhciBidXJnZXJCdW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChidXJnZXJJZCkuY2hpbGRyZW47XG5cbiAgaWYgKG9wZW4gIT09IDApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJ1cmdlckJ1bi5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICBidXJnZXJCdW5baV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMClcIjtcbiAgICAgIH0gZWxzZSBpZiAoaSA9PSAxKSB7XG4gICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMClcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1cmdlckJ1bltpXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwKVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgtMTAwJSlcIjtcbiAgICBvcGVuID0gMDtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgYnVyZ2VyQnVuLmxlbmd0aDsgX2krKykge1xuICAgICAgaWYgKF9pID09IDApIHtcbiAgICAgICAgYnVyZ2VyQnVuW19pXS5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSg0NWRlZylcIjtcbiAgICAgIH0gZWxzZSBpZiAoX2kgPT0gMSkge1xuICAgICAgICBidXJnZXJCdW5bX2ldLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgYnVyZ2VyQnVuW19pXS5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVgoMjBweClcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1cmdlckJ1bltfaV0uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoLTQ1ZGVnKVwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIGh0bWxFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWCgwKVwiO1xuICAgIG9wZW4gPSAxO1xuICB9XG59Il0sImZpbGUiOiJpbmRleC5qcyJ9
