
  $(document).ready(function() {
   var audioElement = document.createElement('audio');
   audioElement.setAttribute('src', 'webs.mp4');

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
   audioElement.setAttribute('src', 'visudk.mp4');

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