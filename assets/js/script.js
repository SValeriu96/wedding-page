const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
  if (nav.classList.toggle("open")) {
    navBtnImg.src = "./assets/img/nav-close.svg";
  } else {
    navBtnImg.src = "./assets/img/nav-open2.svg";
  }
};
AOS.init();
