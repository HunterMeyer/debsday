$(document).ready(function() {

  $('#msg-pic').click(function() { $('#hide-pic').trigger('click'); });
  $('#msg-vid').click(function() { $('#hide-vid').trigger('click'); });
  $('#send-another').click(function() { window.location = '/'; });

  $('#msg-submit').click(function() {
    $(this).hide();
    $('#msg-loading').removeClass('hidden');
    $('#hide-name').val($('#msg-name').val());
    $('#hide-msg').val($('#msg-msg').val());
    $('#new_message').submit();
  });

});
