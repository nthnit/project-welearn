$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  mobileFirst: true,
  // draggable: true,
  prevArrow: '.arrow-prev',
  nextArrow: '.arrow-next',
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
  centerPadding: '10px',
  // centerPadding: '60px',
  // variableWidth: true,
  mobileFirst: false,
  swipeToSlide: false,
  responsive: [
    {
    breakpoint: 1199.98,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 3
    }
    },
    {
    breakpoint: 480,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '40px',
    slidesToShow: 1
    }} ]
});





// Teacher slider

$('.slider-teacher').slick({

  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  arrows: true,
  centerMode: true,
  centerPadding: '1px',
  mobileFirst: false,
  swipeToSlide: false,
  prevArrow: '.arrow-prev-teacher',
  nextArrow: '.arrow-next-teacher',
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
    breakpoint: 768.98,
    settings: {
    arrows: false,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 1,
    }
    }, 
  ],
});

// // End Teacher slider


$('.ins-slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.ins-slider-nav',
  // cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  mobileFirst: true,
  // draggable: true,
  prevArrow: '.arrow-prev-ins',
  nextArrow: '.arrow-next-ins',
  autoplay: true,
  autoplaySpeed: 3000,
});

$('.ins-slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.ins-slider-for',
  dots: false,
  focusOnSelect: true,
  arrows: false,
  centerMode: true,
  centerPadding: '5px',
  // centerPadding: '60px',
  // variableWidth: true,
  mobileFirst: false,
  swipeToSlide: true,
});



$('.slider-journey').slick({

  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  // focusOnSelect: true,
  arrows: true,
  // centerMode: true,
  centerPadding: '0px',
  mobileFirst: false,
  swipeToSlide: false,
  prevArrow: '.arrow-prev-journey',
  nextArrow: '.arrow-next-journey',
  // autoplay: true,
  // autoplaySpeed: 3000,
});

$('.slider-journey').on('afterChange', function(event, slick, currentSlide) {
  $('.list-tab .tab-item').removeClass('active'); // Xóa class "active" khỏi tất cả các tab-item
  $('.list-tab .tab-item[data-slide="' + (currentSlide + 1) + '"]').addClass('active'); // Thêm class "active" vào tab-item tương ứng với slide hiện tại
});

$('li[data-slide]').click(function(e) {
  e.preventDefault();
  var slideno = $(this).data('slide');
  console.log(slideno);
  $('.slider-journey').slick('slickGoTo', slideno - 1);
});