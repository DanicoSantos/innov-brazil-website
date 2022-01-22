// Include html code
function includeHTML() {

  // Add menu toggler click event listener
  const mobileMenuToggler = $("#menuToggler");


  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();          

          //This is id of HTML element (English) with attribute lng-tag
          $("#enTranslator").click(function (event) {
            event.preventDefault();
            translate("en", "lng-tag");
            location.search = "en";
          });
          //This is id of HTML element (Khmer) with attribute lng-tag
          $("#ptTranslator").click(function (event) {
            event.preventDefault();
            translate("pt", "lng-tag");
            location.search = "pt";
          });

          $("[href='#contact']").click(function (event) {
            const lngQueryString = location.search;
            location.href = '/' + lngQueryString + '#contact';
          })

          translate(location.search.replace('?', ''), 'lng-tag');
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    } 
  }

  if (mobileMenuToggler) {
    mobileMenuToggler.click(function() {
      $('#NavLinks').toggle();
    })
  }
}
