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
// модальные окна
const modal1 = document.getElementById("page_modal");
const modal1Btn = document.getElementById("modal1Btn");
const close = document.getElementById("modalCross");
const karandash = document.getElementById("btnkarandash1");
const modal2 = document.getElementById("page_modal2");
const close2 = document.getElementById("modalCross2");
const modal2Btn = document.getElementById("modal2Btn");
const karandash2 = document.getElementById("btnkarandash2");
const modal2Btn2 = document.getElementById("modal2Btn2");

modal1Btn.onclick = () => {
  modal1.style.visibility = "visible";
};
close.onclick = () => {
  modal1.style.visibility = "hidden";
};
karandash.onclick = () => {
  modal1.style.visibility = "visible";
};
modal2Btn.onclick = () => {
  modal2.style.visibility = "visible";
};
close2.onclick = () => {
  modal2.style.visibility = "hidden";
};
karandash2.onclick = () => {
  modal2.style.visibility = "visible";
};
modal2Btn2.onclick = () => {
  modal2.style.visibility = "visible";
};

// инпуты;
const input1 = document.querySelector(".js-input1");
const input2 = document.querySelector(".js-input2");
const input3 = document.querySelector(".js-input3");
const input4 = document.querySelector(".js-input4");
const input5 = document.querySelector(".js-input5");
const errorBlank = document.querySelector("#error_input1");
const errorBlank2 = document.querySelector("#error_input2");
const errorBlank3 = document.querySelector("#error_input3");
const errorBlank4 = document.querySelector("#error_input4");
const errorBlank5 = document.querySelector("#error_input5");

input1.addEventListener("click", () => {
  if (input1.value === "") {
    input1.classList.add("error");
    errorBlank.style.visibility = "visible";
  } else {
    input1.classList.remove("error");
    errorBlank.style.visibility = "hidden";
  }
});
input2.addEventListener("click", () => {
  if (input2.value === "") {
    input2.classList.add("error");
    errorBlank2.style.visibility = "visible";
  } else {
    input2.classList.remove("error");
    errorBlank2.style.visibility = "hidden";
  }
});
input3.addEventListener("click", () => {
  if (input3.value === "") {
    input3.classList.add("error");
    errorBlank3.style.visibility = "visible";
  } else {
    input3.classList.remove("error");
    errorBlank3.style.visibility = "hidden";
  }
});
input4.addEventListener("click", () => {
  if (input4.value === "") {
    input4.classList.add("error");
    errorBlank4.style.visibility = "visible";
  } else {
    input4.classList.remove("error");
    errorBlank4.style.visibility = "hidden";
  }
});
input5.addEventListener("click", () => {
  if (input5.value === "") {
    input5.classList.add("error");
    errorBlank5.style.visibility = "visible";
  } else {
    input5.classList.remove("error");
    errorBlank5.style.visibility = "hidden";
  }
});

// иконки

const icons1 = document.querySelector("#svgInternalID1");
const svgImage1 = document.querySelector(".svg-js1");

svgImage1.addEventListener("click", () => {
  icons1.classList.toggle("class");
});
const icons2 = document.querySelector("#svgInternalID2");
const svgImage2 = document.querySelector(".svg-js2");

svgImage2.addEventListener("click", () => {
  icons2.classList.toggle("class");
});
const icons3 = document.querySelector("#svgInternalID3");
const svgImage3 = document.querySelector(".svg-js3");

svgImage3.addEventListener("click", () => {
  icons3.classList.toggle("class");
});
const icons4 = document.querySelector("#svgInternalID4");
const svgImage4 = document.querySelector(".svg-js4");

svgImage4.addEventListener("click", () => {
  icons4.classList.toggle("class");
});
const icons5 = document.querySelector("#svgInternalID5");
const svgImage5 = document.querySelector(".svg-js5");

svgImage5.addEventListener("click", () => {
  icons5.classList.toggle("class");
});
const icons6 = document.querySelector("#svgInternalID6");
const svgImage6 = document.querySelector(".svg-js6");

svgImage6.addEventListener("click", () => {
  icons6.classList.toggle("class");
});
////////////////////////////////////////////////////////////
const svgBasket1 = document.getElementById("svg-jsB1");
const preiconsbasket1 = document.getElementById("Basket1-1");
const iconsbasket1 = document.getElementById("Basket1-2");
const posticonsbasket1 = document.getElementById("Basket1-3");

svgBasket1.addEventListener("click", () => {
  preiconsbasket1.classList.toggle("class2");
  iconsbasket1.classList.toggle("class2");
  posticonsbasket1.classList.toggle("class2");
});

const svgBasket2 = document.getElementById("svg-jsB2");
const preiconsbasket2 = document.getElementById("Basket2-1");
const iconsbasket2 = document.getElementById("Basket2-2");
const posticonsbasket2 = document.getElementById("Basket2-3");

svgBasket2.addEventListener("click", () => {
  preiconsbasket2.classList.toggle("class2");
  iconsbasket2.classList.toggle("class2");
  posticonsbasket2.classList.toggle("class2");
});

const svgBasket3 = document.getElementById("svg-jsB3");
const preiconsbasket3 = document.getElementById("Basket3-1");
const iconsbasket3 = document.getElementById("Basket3-2");
const posticonsbasket3 = document.getElementById("Basket3-3");

svgBasket3.addEventListener("click", () => {
  preiconsbasket3.classList.toggle("class2");
  iconsbasket3.classList.toggle("class2");
  posticonsbasket3.classList.toggle("class2");
});

const svgBasket4 = document.getElementById("svg-jsB4");
const preiconsbasket4 = document.getElementById("Basket4-1");
const iconsbasket4 = document.getElementById("Basket4-2");
const posticonsbasket4 = document.getElementById("Basket4-3");

svgBasket4.addEventListener("click", () => {
  preiconsbasket4.classList.toggle("class2");
  iconsbasket4.classList.toggle("class2");
  posticonsbasket4.classList.toggle("class2");
});

const svgBasket5 = document.getElementById("svg-jsB5");
const preiconsbasket5 = document.getElementById("Basket5-1");
const iconsbasket5 = document.getElementById("Basket5-2");
const posticonsbasket5 = document.getElementById("Basket5-3");

svgBasket5.addEventListener("click", () => {
  preiconsbasket5.classList.toggle("class2");
  iconsbasket5.classList.toggle("class2");
  posticonsbasket5.classList.toggle("class2");
});

const svgBasket6 = document.getElementById("svg-jsB6");
const preiconsbasket6 = document.getElementById("Basket6-1");
const iconsbasket6 = document.getElementById("Basket6-2");
const posticonsbasket6 = document.getElementById("Basket6-3");

svgBasket6.addEventListener("click", () => {
  preiconsbasket6.classList.toggle("class2");
  iconsbasket6.classList.toggle("class2");
  posticonsbasket6.classList.toggle("class2");
});

const svgBasket7 = document.getElementById("svg-jsB7");
const preiconsbasket7 = document.getElementById("Basket7-1");
const iconsbasket7 = document.getElementById("Basket7-2");
const posticonsbasket7 = document.getElementById("Basket7-3");

svgBasket7.addEventListener("click", () => {
  preiconsbasket7.classList.toggle("class2");
  iconsbasket7.classList.toggle("class2");
  posticonsbasket7.classList.toggle("class2");
});

const svgBasket8 = document.getElementById("svg-jsB8");
const preiconsbasket8 = document.getElementById("Basket8-1");
const iconsbasket8 = document.getElementById("Basket8-2");
const posticonsbasket8 = document.getElementById("Basket8-3");

svgBasket8.addEventListener("click", () => {
  preiconsbasket8.classList.toggle("class2");
  iconsbasket8.classList.toggle("class2");
  posticonsbasket8.classList.toggle("class2");
});

const svgBasket9 = document.getElementById("svg-jsB9");
const preiconsbasket9 = document.getElementById("Basket9-1");
const iconsbasket9 = document.getElementById("Basket9-2");
const posticonsbasket9 = document.getElementById("Basket9-3");

svgBasket9.addEventListener("click", () => {
  preiconsbasket9.classList.toggle("class2");
  iconsbasket9.classList.toggle("class2");
  posticonsbasket9.classList.toggle("class2");
});
/////////////////////////////////////////////////////////////
// дополнительно
const strelka = document.getElementById("strelka");
const strelka2 = document.getElementById("strelka2");
const shop1 = document.querySelector(".main_toggle");
const shop2 = document.querySelector(".main_shop_toggle2");
const line = document.querySelector(".main_line");
const check = document.querySelector(".label_check");
const textBasket = document.querySelector(".main_h2_active");
const flex = document.querySelector(".main_shop__flex");

strelka.onclick = () => {
  shop1.classList.toggle("dislpay_none");
  check.classList.toggle("visibility_hidden");
  if (textBasket.innerHTML == "") {
    flex.style.height = "30px";
    textBasket.innerHTML = "203 товара &#183; 2 010 063 com";
  } else {
    flex.style.height = "57px";
    textBasket.innerHTML = "";
  }
};
strelka2.onclick = () => {
  shop2.classList.toggle("dislpay_none");
};

const resultCheckbox = document.getElementById("result_checkbox");
const pDelete = document.getElementById("p-delete");
const changeSize = document.getElementById("changeSize");
const changeSize2 = document.getElementById("changeSize2");

resultCheckbox.addEventListener("change", function () {
  if (resultCheckbox.checked) {
    pDelete.style.display = "none";
    changeSize.style.fontSize = "18px";
    btnSubmit.innerText = "Оплатить 2 010 063 com";
  } else {
    pDelete.style.display = "block";
    changeSize.style.fontSize = "13px";
    btnSubmit.innerText = "Заказать ";
  }
});
/////////

function selectAll(source) {
  let checkboxes = document.getElementsByName("check");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== source) {
      checkboxes[i].checked = source.checked;
    }
  }
}

function selectAll2(source) {
  let checkboxes = document.getElementsByName("check2");
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== source) {
      checkboxes[i].checked = source.checked;
    }
  }
}

function updateCheckboxes(checkbox) {
  var checkboxes = document.getElementsByName(checkbox.name);

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i] !== checkbox) {
      checkboxes[i].checked = false;
    }
  }
}
