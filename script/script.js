window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;
  if (scrollPosition > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
