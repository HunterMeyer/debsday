$(document).ready(function() {
  $("#webcam").scriptcam({
    width: 320,
    height: 320,
    fileName: 'userVideo',
    connected: enableRecord,
    onError: oopsError,
    maximumTime: 90,
    timeLeft: remaining,
    fileReady: showVideo,
    showMicrophoneErrors: true,
    setVolume: setVolume,
    showDebug: true
  });

  $('#recordButton').click(function() {
    $.scriptcam.startRecording();
    $(this).hide();
    $('#finishButton').show();
    $('#time').show();
    $('#volume').show();
  });

  $('#finishButton').click(function() {
    $.scriptcam.closeCamera();
    $(this).hide();
    $('#time').hide();
    $('#volume').hide();
    $('#waitText').show();
  })

});

function enableRecord() { $('#recordButton').show(); }
function oopsError(errorId, errorMsg) { alert(errorMsg); }
function remaining(time) { $('#timeRemaining').text(time); }
function showVideo(address) { $('#waitText').hide(); $('#previewVideo').src(address).show(); $('#userVideo').val(address); }
function setVolume(value) { $('#curretVolume').text(value); }

// $.scriptcam.pauseRecording();
// $.scriptcam.resumeRecording();
