jQuery(document).ready(function ($) {
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
  

});

