$(document).ready(function() {
  $("#webcam").scriptcam(
    width: 640,
    height: 640,
    fileName: 'userVideo',
    connected: enableRecord,
    onError: oopsError,
    maximumTime: 90,
    timeLeft: remaining,
    showDebug: true
  );

  $('#recordButton').click(function() {
    $.scriptcam.startRecording();
    $(this).hide();
    $('#finishButton').show();
    $('#time').show();
  });

  $('#finishButton').click(function() {
    $.scriptcam.closeCamera();
    $(this).hide();
    $('#time').hide();
    $('#waitText').show();
  })

});

function enableRecord() { $('#recordButton').show(); }
function oopsError(errorId, errorMsg) { alert(errorMsg); }
function remaining(time) { $('#timeRemaining').text(time); }
function fileReady(address) { $('#waitText').hide(); $('#previewVideo').src(address).show(); $('#userVideo').val(address); }

// $.scriptcam.pauseRecording();
// $.scriptcam.resumeRecording();
