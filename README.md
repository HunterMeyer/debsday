## DebsDay: desktop_scriptcam

#### This app allows visitors to leave a message for my friend's brithday.
###### You can write a note, upload a picture and/or record a video with your webcam.

This branch is almost identical to master with the exception that it uses the <a href='http://www.scriptcam.com/' target:'_blank'>**ScriptCam**</a> jQuery plugin to record the user's webcam and microphone. It uploads the recording to an Amazon S3 bucket and returns the filename - which gets passed to the message form.

*<b>Note</b>: Since ScriptCam uses Flash, this branch will not work on a mobile device that doesn't support Flash.*


**Stack**
- Rails 4.0.2
- Ruby 2.1.2
- PostgreSQL 9.3.3

**Tools**
- <a href='https://www.polymer-project.org' tagret='_blank'>Polymer</a> (Material Design) for the UI
- <a href='https://github.com/ahuth/emcee' taget='_blank'>Emcee</a> to include web components in the Asset Pipeline
- <a href='https://github.com/thoughtbot/paperclip' taget='_blank'>Paperclip</a> for uploading images
- <a href='https://github.com/aws/aws-sdk-core-ruby' taget='_blank'>AWS-SDK</a> for storing uploads in S3
- <a href='https://github.com/gucki/swfobject-rails'>SWFObject-Rails</a> to include swfobject in the Asset Pipeline
