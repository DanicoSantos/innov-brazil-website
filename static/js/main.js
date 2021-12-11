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

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  function toggleMobileMenu() {
    var x = document.getElementById("NavLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

document.body.onload = () => {
  const mobileMenuToggler = document.querySelector("#menuToggler");
  mobileMenuToggler.addEventListener('click', () => {
    toggleMobileMenu();
  })
}

