jQuery(document).ready(function ($) {
  function changeNavbarOnScroll() {
    const navbar = document.getElementById("nav");

    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      navbar.querySelector(".navbar").classList.remove("is-dark");
    } else {
      navbar.querySelector(".navbar").classList.add("is-dark");
    }
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
  const mobileMenuToggler = document.querySelector("#menuToggler");
  mobileMenuToggler.addEventListener('click', () => {
    toggleMobileMenu();
  });


  window.onscroll = () => {
    // changeNavbarOnScroll();
  };
});

