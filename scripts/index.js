window.onscroll = function () {
  stickyHeader();
};

function stickyHeader() {
  const header = document.getElementById("nav-header");
  const sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
