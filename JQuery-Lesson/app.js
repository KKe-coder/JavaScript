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

// mouseアクション

// $(function () {
//   $('.box1').on('click', function () {
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function () {
//     $('.box1').removeClass('box1-ext');
//   });
// });

// JS-7

// $(function () {
//   $('.bg1').on('click', function () {
//     $('.bg1').slideUp();
//   });
//   $('.bg2').on('click', function () {
//     $('.bg2').slideUp();
//   });
//   $('.bg3').on('click', function () {
//     $('.bg3').slideUp();
//   });
//   $('.bg4').on('click', function () {
//     $('.bg4').slideUp();
//   });
// });


$(function () {
  $('button').on('click', function () {
    $('ul').children().css('color','red');
  });
});
