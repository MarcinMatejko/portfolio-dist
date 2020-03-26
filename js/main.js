navbar = document.getElementById('navbar');

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = '-64px';
  } else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop;
});
