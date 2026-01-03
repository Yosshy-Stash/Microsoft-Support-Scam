
      var isNS = "Netscape" == navigator.appName ? 1 : 0;
      "Netscape" == navigator.appName && document.captureEvents(Event.MOUSEDOWN || Event.MOUSEUP);

      function mischandler() {
        return !1
      }

      function mousehandler(a) {
        a = isNS ? a : event;
        a = isNS ? a.which : a.button;
        if (2 == a || 3 == a) return !1
      }
      document.oncontextmenu = mischandler;
      document.onmousedown = mousehandler;
      document.onmouseup = mousehandler;
   
    
      document.onkeydown = function(a) {
        return !1
      };
   
    
      document.attachEvent("onkeydown", win_onkeydown_handler);

      function win_onkeydown_handler() {
        switch (event.keyCode) {
          case 116:
            event.returnValue = !1;
            event.keyCode = 0;
            break;
          case 27:
            event.returnValue = !1, event.keyCode = 0
        }
      }
   