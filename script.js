// Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger1").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger2").addEventListener("click", function () {
    document.querySelector("header").classList.toggle("open");
  });
});
// Счётчик
const counter = function () {
  const btns = document.querySelectorAll(".counter__btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const direction = this.dataset.direction;
      const inp = this.parentElement.querySelector(".counter__value");
      const currentValue = +inp.value;
      let newValue;

      if (direction === "plus") {
        newValue = currentValue + 1;
      } else {
        newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
      }

      inp.value = newValue;
    });
  });
};

counter();
