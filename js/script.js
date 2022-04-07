var preloader = document.getElementById("loader-wrapper");

function myfunction() {
  preloader.style.display = "none";
}
var number = 0;
$(".plus").click(function () {
  number = number + 1;
  $(".result").text(number);
});

$(".minus").click(function () {
  if (number > 0) {
    number = number - 1;
    $(".result").text(number);
  }
});

$("nav ul li a").click(function(){
  ("nav ul li .a").removeClass("slick-arrow");
})
$(window).scroll(function () {
  if ($(window).scrollTop() > 200) {
    $(".navbar").addClass("nav-fix");
  } else {
    $(".navbar").removeClass("nav-fix");
  }
  if ($(window).scrollTop() > 600) {
    $(".up .topper").fadeIn();
  } else {
    $(".up .topper").fadeOut();
  }
});

$(".up .topper").click(function () {
  $("html,body").animate({
    scrollTop: 0,
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 500) {
    $(".up .topper").fadeIn();
  } else {
    $(".up .topper").fadeOut();
  }
});

$("nav .right .sea").click(function () {
  $("nav .right .sea .s-box").toggleClass("arman");
});

$(".choto").click(function (e) {
  $(".boro").attr("src", e.target.src);
});

new VenoBox({
  selector: ".my-video-links",
});

$("#knit .product-slider").slick({
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$("#brand .brand-main").slick({
  slidesToShow: 6,
  arrows: false,
  autoplay: true,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#availeable .abale-main").slick({
  slidesToShow: 2,
  prevArrow: '<i class="bi bi-arrow-left babu"></i>',
  nextArrow: "a",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#Meet-Adoption .bred-slider").slick({
  arrows: false,
  autoplay: true,
  autoplaySpeed: 500,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#Meet-Adoption2 .verticle-dogs").slick({
  dots: true,
  vertical: true,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#meet .dogs-slider").slick({
  slidesToShow: 4,
  prevArrow: '<i class="bi bi-arrow-left baba"></i>',
  nextArrow: '<i class="bi bi-arrow-left babai"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#knit .right-text .lrg1").click(function () {
  $("#knit .right-text .lrg1").addClass("p9");
});

$("#knit .right-text .lrg2").click(function () {
  $("#knit .right-text .lrg2").addClass("p9");
});
$("#knit .right-text .lrg3").click(function () {
  $("#knit .right-text .lrg3").addClass("p9");
});
$("#knit .right-text .lrg1").click(function () {
  $("#knit .right-text .lrg2").removeClass("p9");
});

$("#knit .right-text .lrg1").click(function () {
  $("#knit .right-text .lrg3").removeClass("p9");
});
$("#knit .right-text .lrg2").click(function () {
  $("#knit .right-text .lrg3").removeClass("p9");
});

$("#knit .right-text .lrg2").click(function () {
  $("#knit .right-text .lrg1").removeClass("p9");
});
$("#knit .right-text .lrg3").click(function () {
  $("#knit .right-text .lrg2").removeClass("p9");
});

$("#knit .right-text .lrg3").click(function () {
  $("#knit .right-text .lrg1").removeClass("p9");
});

$("#knit .right-text span .color-box4").click(function () {
  $("#knit .right-text span .color-box4").addClass("p6");
});
$("#knit .right-text span .color-box4").click(function () {
  $("#knit .right-text span .color-box1").removeClass("p6"),
    $("#knit .right-text span .color-box2").removeClass("p6"),
    $("#knit .right-text span .color-box3").removeClass("p6");
});

$("#knit .right-text span .color-box3").click(function () {
  $("#knit .right-text span .color-box3").addClass("p6");
});
$("#knit .right-text span .color-box3").click(function () {
  $("#knit .right-text span .color-box1").removeClass("p6"),
    $("#knit .right-text span .color-box2").removeClass("p6"),
    $("#knit .right-text span .color-box4").removeClass("p6");
});

$("#knit .right-text span .color-box2").click(function () {
  $("#knit .right-text span .color-box2").addClass("p6");
});
$("#knit .right-text span .color-box2").click(function () {
  $("#knit .right-text span .color-box1").removeClass("p6"),
    $("#knit .right-text span .color-box3").removeClass("p6"),
    $("#knit .right-text span .color-box4").removeClass("p6");
});

$("#knit .right-text span .color-box1").click(function () {
  $("#knit .right-text span .color-box1").addClass("p6");
});
$("#knit .right-text span .color-box1").click(function () {
  $("#knit .right-text span .color-box2").removeClass("p6"),
    $("#knit .right-text span .color-box3").removeClass("p6"),
    $("#knit .right-text span .color-box4").removeClass("p6");
});

$("#find .find-main .find-item .find-pet").click(function () {
  $("#find .find-main .find-item .pets").toggleClass("ghar");
});

$("#banner .banner-main").slick({
  arrows: false,
  autoplay: false,
  fade: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$diy = $(".number .data");
$diy.rollNumber({
  number: $diy[0].dataset.number,
  speed: 800,
  interval: 200,
  rooms: 2,
  space: 35,
  symbol: ",",
  fontStyle: {
    "font-size": 72,
    "font-family": "LetsgoDigital",
  },
});
$diy = $(".number-diy .data");
$diy.rollNumber({
  number: $diy[0].dataset.number,
  speed: 800,
  interval: 200,
  rooms: 2,
  space: 35,
  symbol: ",",
  fontStyle: {
    "font-size": 72,
    "font-family": "LetsgoDigital",
  },
});



$diy = $(".number-diya .data");
$diy.rollNumber({
  number: $diy[0].dataset.number,
  speed: 800,
  interval: 200,
  rooms: 2,
  space: 35,
  symbol: ",",
  fontStyle: {
    "font-size": 72,
    "font-family": "LetsgoDigital",
  },
});

$diy = $(".number-diu .data");
$diy.rollNumber({
  number: $diy[0].dataset.number,
  speed: 500,
  interval: 200,
  rooms: 2,
  space: 35,
  symbol: ",",
  fontStyle: {
    "font-size": 65,
    "font-family": "Nunito",
  },
});


$("#customer .tes-main").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


