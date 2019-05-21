AOS.init({
  duration: 2000,
});
$('#btnpause').hide();
function PlayPause() {
  $('#btnplay').click(function () {
    $('#btnplay').hide();
    $('#btnpause').show();
    $('#newradio').trigger('play');
  });
  $('#btnpause').click(function () {
    $('#btnpause').hide();
    $('#btnplay').show();
    $('#newradio').trigger('pause');
  });
}
function IdoCarosousel() {
  $('.carousel .carousel-item').each(function () {
    $('#idocarousel').on('slide.bs.carousel', function (e) {
      var $e = $(e.relatedTarget);
      var idx = $e.index();
      var itemsPerSlide = 3;
      var totalItems = $('.carousel-item').length;

      if (idx >= totalItems - (itemsPerSlide - 1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i = 0; i < it; i++) {
          // append slides to end
          if (e.direction == "left") {
            $('.carousel-item').eq(i).appendTo('.carousel-inner');
          }
          else {
            $('.carousel-item').eq(0).appendTo('.carousel-inner');
          }
        }
      }
    });
  });
}
$(document).ready(function () {
  PlayPause();
  IdoCarosousel();
});