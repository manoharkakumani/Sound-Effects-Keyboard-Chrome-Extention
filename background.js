chrome.runtime.onMessage.addListener(function(response,sender,sendResponse){ 
var sound = new Audio();
 sound.src=response;
sound.play();
});