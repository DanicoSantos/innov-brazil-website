function translate(lng, tagAttr) {
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