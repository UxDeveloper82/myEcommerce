$(document).ready(function() {
   $("#second-text").hide();
   $("#handle").click(toggleImage);
});

function toggleImage() {
   if ($("#handle").html() == 'Read More +') {
       $("p").show(1000);
       $("#handle").html('Read Less -')
   }else {
       $("#second-text").hide();
       $("#handle").html('Read More +')
   }
}