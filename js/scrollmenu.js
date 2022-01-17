$(function () {
var headNav = $("header");
  $(window).on('load scroll', function () {
    if ($(this).scrollTop() > 200 && headNav.hasClass('is-fixed') == false) {
      headNav.css("display", "block");
      headNav.css({ "top": '-80px' });
      headNav.addClass('is-fixed');
      headNav.animate({ "top": 0 }, 600);
    }
    else if ($(this).scrollTop() < 200 && headNav.hasClass('is-fixed') == true) {
      headNav.removeClass('is-fixed');
      headNav.animate({ "top": "-80px" }, 600);
      headNav.css("display", "none");
  }
});
});

