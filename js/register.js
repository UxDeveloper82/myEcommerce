$(document).ready(function() {
  $("form").hide();
  $("p").click(function() { 
    $("form").toggle(1000);
    return false
    });
});