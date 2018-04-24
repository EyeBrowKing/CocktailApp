$(function(){

  $('#toggle').click(function() {
     $(this).toggleClass('active');
     $('#overlay').toggleClass('open');
    });

    $.ajax({
      type: 'GET',
      url: '/getloggedin',
      dataType: "json",
      cache: false,
      contentType: "application/json",
      success: function(data) {
        if (data) {
          console.log(data)

          if (data.result === "true") {
            $("#leftspan").text("Logout");
            $("#leftlink").attr("href", "/logout");

            $("#rightspan").text("Profile");
            $("#rightlink").attr("href", "/profile");
          }
        }
        else {
          console.log("no data");
        }
      }
    });



});

$( ".home-image" ).on( "click", function() {
  $(".image-overlay").fadeIn(1000).queue(function(n) {
    $(this).fadeOut(1000); n();
  });
});

$('.overlay-test i').click(function (event) {
event.preventDefault();
// or use return false;
});
