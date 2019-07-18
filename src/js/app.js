$(document).ready(function() {
  /*Toggle navigation dropdown list*/
  if ($(window).width() < 560) {
    $("#nav-content").toggle(false);
  }
  $("#nav-toggle").click(function() {
    $("#nav-content").toggle();
  });

  // contactModal
  let modal = $("#contactModal");
  modal.hide();

  $("#modalShow").click(function() {
    $(modal).slideToggle("slow", function() {
      modal.show();
    });
  });
  $(".modalBtnClose").click(function() {
    $(modal).slideToggle("slow", function() {
      modal.hide();
    });
  });

  $(window).click(function(e) {
    let m = $("#contactModal").attr("id");
    if (e.target.id == m) {
      $(modal).slideToggle("slow", function() {
        modal.hide();
      });
    }
  });
});
