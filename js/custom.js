$(document).ready(function() {
  console.log('test');

  $('.navigation__button').click(function() {
    $('.navigation__list').css('display', 'block');
  });
  $('.navigation__list').click(function() {
    $('.navigation__checkbox').prop('checked', false);

    $('.navigation__list').css('display', 'none');
  });
});
