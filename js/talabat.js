/*
  ===========================
  == OPEN AND CLOSE NAVBAR ==
  ===========================
*/
let navBtn = document.querySelector("header .nav-btn");
let nav = document.querySelector("header ul");

navBtn.onclick = () => {
  navBtn.classList.toggle("open");
  nav.classList.toggle("open");
};



/*
  =========================
  == ACCORDION IN FOOTER ==
  =========================
*/
let accordionSub = document.querySelectorAll("footer .links-center p");
let accordionBtn = document.querySelectorAll("footer .links-center p .icon");
let accordionList = document.querySelectorAll("footer .links-center .content");

for (let i = 0; i < 3; i++) {
  accordionSub[i].onclick = () => {
    accordionBtn[i].classList.toggle("open");
    accordionList[i].classList.toggle("open");
  };
}