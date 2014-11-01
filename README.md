## DebsDay

#### This app allows visitors to leave a message for my friend's brithday.
###### You can write a note, upload a picture and/or record a video with your phone's camera.

This branch is almost identical to master with the exception that it's using **getUserMedia** and **MediaStreamRecorder** to capture the user's webcam and microphone. Ideally I'd like to upload the recording to an Amazon S3 bucket using Paperclip or some direct-AWS-AJAX option.

*<b>Note</b>: This branch is currently in a development state. See the <a href='https://github.com/HunterMeyer/debsday/tree/dektop_scriptcam'>desktop_scriptcam</a> branch for a working desktop implementation using ScrtipCam.*


**Stack**
- Rails 4.0.2
- Ruby 2.1.2
- PostgreSQL 9.3.3
- HTML5

**Tools**
- <a href='https://www.polymer-project.org' tagret='_blank'>Polymer</a> (Material Design) for the UI
- <a href='https://github.com/ahuth/emcee' taget='_blank'>Emcee</a> to include web components in the Asset Pipeline
- <a href='https://github.com/thoughtbot/paperclip' taget='_blank'>Paperclip</a> for uploading images
- <a href='https://github.com/aws/aws-sdk-core-ruby' taget='_blank'>AWS-SDK</a> for storing uploads in S3
- <a href='https://cdn.webrtc-experiment.com/MediaStreamRecorder-v1.2.js' target='_blank'>MediaStreamRecorder</a> for capturing webcam video
- <a href='https://developer.mozilla.org/en-US/docs/NavigatorUserMedia.getUserMedia'>getUserMedia</a> for capturing mic audio