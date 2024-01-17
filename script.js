// Agregar una clase al header al hacer scroll
$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var headerHeight = $('.navbar').outerHeight();

  if (scroll >= headerHeight) {
      $('.navbar').addClass('hidden');
  } else {
      $('.navbar').removeClass('hidden');
  }
});
