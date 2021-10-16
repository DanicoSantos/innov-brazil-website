function changeNavbarOnScroll() {
  const navbar = document.getElementById("nav");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.querySelector(".navbar").classList.remove("is-dark");
  } else {
    navbar.querySelector(".navbar").classList.add("is-dark");
  }
}

window.onscroll = () => {
    changeNavbarOnScroll();
}


