"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");

const btnsOpenModal = document.querySelectorAll(".show-modal");
// console.log(btnsOpenModal);

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  const element = btnsOpenModal[i];
  // console.log(element);
  element.addEventListener("click", function () {
    // console.log("button clicked!!");
    // modal.classList.remove(".hidden");❌
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
}

btnCloseModal.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

//using the escape key to listen events
//also called global events

document.addEventListener("keydown", function (event) {
  console.log(event);
  if (event.key == "Escape") {
    hideModal();
  }
});
