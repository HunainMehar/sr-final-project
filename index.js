$(document).ready(function () {
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });
});

// fixed top

$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

// active links
$(document).on("click", "ul li", function () {
  $(this).addClass("active").siblings().removeClass("active");
});

// back to top
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      $(".back-to-top").fadeIn();
    } else {
      $(".back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $(".back-to-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    );
    return false;
  });
});
