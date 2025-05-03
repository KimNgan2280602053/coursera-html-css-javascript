// STEP 2: Wrap in IIFE
(function (window) {
    var byeSpeaker = {};
    var speakWord = "Goodbye";
  
    byeSpeaker.speak = function (name) {
      console.log(speakWord + " " + name);
    };
  
    window.byeSpeaker = byeSpeaker;
  })(window);
  