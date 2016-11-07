$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['', 'pink', 'yellow'],
      anchors: ['firstPage', 'secondPage', 'thirdPage'],

      menu: '#menu',
      navigation: true,

      onLeave: function(index, nextIndex, direction){
                  var leavingSection = $(this);

                  if (index == 1 && direction == 'down') {
                    clearTimeout(timeout);
                  }

                  else if (index == 2 && direction == 'down') {
                    clearTimeout(timeout);
                  }

                  else if (index == 2 && direction == 'up') {
                    setTimeout(timeout);
                    start();
                  }

                  else if (index == 3 && nextIndex == 1 && direction == 'up') {
                    setTimeout(timeout);
                    start();
                  }
              }
    });
});
