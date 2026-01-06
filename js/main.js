
  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'audios/webs.mp4');
   audioElement.volume = 0.3; // 音量を調整

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

     $('#link_black').click(function() {
       audioElement.play();

   });


      $('.pro_box').click(function() {
       audioElement.play();

   });

       $('#poptxt').click(function() {
       audioElement.play();

   });

});

  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'audios/visudk.mp4');

   audioElement.addEventListener('ended', function() {
       this.play();
   }, false);


    $('#mycanvas').click(function() {
       audioElement.play();

   });

     $('#link_black').click(function() {
       audioElement.play();

   });


      $('.pro_box').click(function() {
       audioElement.play();

   });

       $('#poptxt').click(function() {
       audioElement.play();

   });

});


