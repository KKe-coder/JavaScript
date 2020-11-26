// function内部組み込み

// $(function () {
//   $('.box1').slideDown(function (){
//     $('.box1').css({
//       'background-color': '#0000FF',
//       'width': '200px',
//       'height': '100px',
//     }).slideUp();
//   });
// });

$(function () {
  $('.box1').on('click', function () {
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function () {
    $('.box1').removeClass('box1-ext');
  });
});
