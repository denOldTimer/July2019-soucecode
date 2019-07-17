$(document).ready(function() {
  /*Toggle navigation dropdown list*/
  if ($(window).width() < 560) {
    $("#nav-content").toggle(false);
  }
  $("#nav-toggle").click(function() {
    $("#nav-content").toggle();
  });
});
