const backToTop = document.querySelector("#btn-backtotop")
window.onscroll = () => {
  scrollHeader();
  if(window.pageYOffset == 0){
    backToTop.style.display = "none"
}
  if(window.pageYOffset > 20){
      backToTop.style.display = "block"
  }
};
const noScroll = () => {
  window.scrollTo(0, 0);
};
let nav = document.querySelector("#header");
let scroll = nav.offsetTop;
console.log(scroll);

const scrollHeader = () => {
  if (window.pageYOffset > scroll) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
};

// ==============toggle menu===========
const menu = document.querySelector("#btn-menu-toggle");
const headerMobile = document.querySelector("#headerMobile");
menu.addEventListener("click", () => {
  if (menu.classList.contains("btn-close-menu") === false) {
    headerMobile.classList.add("show-menu");
    menu.classList.add("btn-close-menu");
    menu.innerHTML = "<i class='fas fa-times'></i>";
    window.addEventListener("scroll", noScroll);
    // const body = document.body;
    // body.classList.add("disable-scroll")
  } else {
    headerMobile.classList.remove("show-menu");
    menu.classList.remove("btn-close-menu");
    menu.innerHTML = "<i class='fas fa-list-ul'></i>";
    window.removeEventListener("scroll", noScroll);
    // body.classList.remove("disable-scroll")
  }
});


// ==============back to top ==========

function scrollToTop() {
    if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0) {
        window.scrollBy(0,-50);
        timneOut = setTimeout('scrollToTop()',10);
    }
    else{
        backToTop.style.display="none";
    }
    
}
