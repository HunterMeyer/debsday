$(document).ready(function() {

  $('#msg-pic').click(function() { $('#hide-pic').trigger('click'); });
  $('#msg-vid').click(function() { $('#hide-vid').trigger('click'); });

  $('#msg-submit').click(function() {
    $('#hide-name').val($('#msg-name').val());
    $('#hide-msg').val($('#msg-msg').val());
    $('#new_message').submit();
  });

});