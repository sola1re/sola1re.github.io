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

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}


window.addEventListener('scroll', function() {
  var articleBox = document.getElementById('article-box');
  var scrollPosition = window.scrollY;
    articleBox.style.left = 80 + scrollPosition * 0.2 + '%';
});
