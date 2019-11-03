$("#colr-mode-toggle").on("click", function() {
    if($("body").hasClass("is-dark")) {
      $("body").removeClass("is-dark");
      $("#ic-colr-mode").removeClass("is-rotated");
    } else {
      $("body").addClass("is-dark");
      $("#ic-colr-mode").addClass("is-rotated");
    }
});