jQuery(document).ready(function ($) {
  const mobileMenuToggler = document.querySelector("#menuToggler");
  const lngQueryString = location.search;

  if (!lngQueryString) {
    location.search = "en";
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

  if (mobileMenuToggler) {
    mobileMenuToggler.addEventListener("click", () => {
      toggleMobileMenu();
    });
  }

});

