function translate(lng, tagAttr) {
  const navMenuItems = $('.navbar-item');
  for (let item of navMenuItems) {
    let $item = $(item);
    if ($item.attr('href').indexOf('#') < 0) {
      if ($item.attr('href').indexOf('?') < 0) {
        let newItemLink = $item.attr('href') + "?" + lng;
        $item.attr('href', newItemLink);
      }
    } else {
      if ($item.attr('href').indexOf('?') < 0) {
        let newItemLinkHash = '?' + lng + $item.attr('href').replace('/', '');
        $item.attr('href', newItemLinkHash);
      }
      
    }    
  }
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();

  if (lng == "en") {
    $("#enTranslator").css("color", "#f4623a");
    $("#ptTranslator").css("color", "#212529");
  }
  if (lng == "pt") {
    $("#ptTranslator").css("color", "#f4623a");
    $("#enTranslator").css("color", "#212529");
  }
}

$(document).ready(function () {
  
});