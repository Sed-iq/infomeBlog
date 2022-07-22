let options = document.querySelector(".img");
let sideNav = document.querySelector("#top_nav");
$(options).on("click", (event) => {
  $(sideNav).slideToggle(100);
});
let optDisp = window.getComputedStyle(options).display;
let cat = sideNav.firstChild.childNodes;
let list = [...cat];
list.shift();
if (optDisp != "none") {
  console.log("Woosh");
  list.forEach((item) => {
    $(item).click((event) => {
      $(sideNav).slideToggle(100);
    });
  });
}
