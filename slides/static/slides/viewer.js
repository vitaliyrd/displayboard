$(document).ready(() => {
  simpleslider.getSlider({
    delay: SLIDE_DURATION,
    duration: TRANSITION_DURATION,
    prop: 'opacity',
    unit: '',
    init: 0,
    show: 1,
    end: 0
  });

  $(document).keypress((event) => {
    // Go full screen when 'F' and 'f' are pressed.
    if (event.which == 70 || event.which == 102) {
      if (isFullScreen()) {
        closeFullscreen();
      } else {
        openFullscreen();
      }
    }
  });

  function closeFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  }

  function openFullscreen() {
    var elem = document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { /* Firefox */
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE/Edge */
      elem.msRequestFullscreen();
    }
  }

  function isFullScreen() {
    return (
      document.fullscreenElement || /* Standard syntax */
      document.webkitFullscreenElement || /* Chrome, Safari and Opera syntax */
      document.mozFullScreenElement ||/* Firefox syntax */
      document.msFullscreenElement /* IE/Edge syntax */
    );
  }
});
