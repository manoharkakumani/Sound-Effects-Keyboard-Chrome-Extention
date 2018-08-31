	function getswitch(callback){
		chrome.storage.sync.get("switch1",callback);
	}
	document.addEventListener('DOMContentLoaded', function() {
		var switchBox = document.getElementById("switch1");
		switchBox.addEventListener("click",function(){
			chrome.tabs.getAllInWindow(null, function(tabs) {
    for(var i = 0; i < tabs.length; i++) {
        chrome.tabs.update(tabs[i].id, {url: tabs[i].url});    }
}); 			var checked = document.getElementById("switch1").checked;
			chrome.storage.sync.set({switch1:checked});
		});	
		getswitch(function(switch1){
			document.getElementById("switch1").checked = switch1['switch1'];	
		});
	});