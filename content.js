function getswitch(callback){
	chrome.storage.sync.get("switch1",callback);
}
 
getswitch(function(switch1)
{
	
var switchOption;
switchOption = switch1['switch1'];
if(switchOption===true)
	{
var i=0;
var m= ["A",'B','C','D','E','F',"G"];
var k=m[0];
document.onkeypress = function(evt) {
    var key = evt.keyCode;
    var c = String.fromCharCode(key);
	 c=c.toLowerCase();
			if(c==' '){
	        if(i>6){i=0;}
			k=m[i++];
			c='a';
			}
chrome.runtime.sendMessage(k+"/"+c+".mp3");
};
}
});