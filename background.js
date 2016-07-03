chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    id: 'Kagunila14.',
    bounds: {
      width: 840,
      height: 600,
      left: 100,
      top: 100
    },
    // maxWidth: 840,
    minWidth:840,
    minHeight:600,
    // maxHeight: 600
  });
});