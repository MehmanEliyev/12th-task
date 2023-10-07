const btn = document.querySelector(".custom-button");
const custom = document.querySelector(".custom");
const formControl = document.getElementsByClassName("form-control");

btn.addEventListener("click", () => {

  if (formControl[0].value == "" || formControl[1].value == "") {
    alert("Fill the inputs");
  } else {
    btn.setAttribute("disabled", "");
    formControl[0].setAttribute("disabled", "");
    formControl[1].setAttribute("disabled", "");

    countMin = 2;
    countSec = 59;

    const span = document.createElement("span");
    const spanSec = document.createElement("span");
    const spanMin = document.createElement("span");
    spanSec.classList.add("mt-3");
    spanMin.classList.add("mt-3");

    span.innerHTML = " : ";
    spanSec.innerHTML = countSec;
    spanMin.innerHTML = countMin;

    const myInterval = setInterval(setMin, 50);

    function setMin() {
      if (countSec != 0) {
        countSec--;
        if (countSec < 10) {
          spanSec.innerHTML = "0" + countSec;
        } else {
          spanSec.innerHTML = countSec;
        }
      } else if (countSec == 0 && countMin > 0) {
        countSec = 59;
        countMin--;
        spanMin.innerHTML = countMin;
      } else {
        btn.removeAttribute("disabled", "");
        formControl[0].removeAttribute("disabled", "");
        formControl[1].removeAttribute("disabled", "");
        formControl[0].value = "";
        formControl[1].value = "";
        span.innerHTML = "";
        spanMin.innerHTML = "";
        spanSec.innerHTML = "";
        clearInterval(myInterval);
      }
    }
    custom.appendChild(spanMin);
    custom.appendChild(span);
    custom.appendChild(spanSec);
  }
});
