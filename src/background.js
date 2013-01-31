chrome.omnibox.onInputEntered.addListener(
	function(text) { 
    $.post(
      "http://xorph.com/lyricryptic/?ajax", 
      "tweet=" + encodeURIComponent(text),
      function(data) {
        alert(data);
      }
    );
  }
);