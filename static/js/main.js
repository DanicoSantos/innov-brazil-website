jQuery(document).ready(function ($) {
  const mobileMenuToggler = document.querySelector("#menuToggler");
  const lngQueryString = location.search;
  const path = location.pathname;

  if (!lngQueryString) {
    location.search = "en";
  }
  
  if (path.includes('partners')) {
    const partnerLinks = $('#partners [href]');
    for (let item of partnerLinks) {
      let $item = $(item);
      let newItemLink = $item.attr('href') + location.search;
      $item.attr('href', newItemLink);
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

  if (mobileMenuToggler) {
    mobileMenuToggler.addEventListener("click", () => {
      toggleMobileMenu();
    });
  }

});

