var result=document.getElementsByTagName("video");
var findVideoTag=setInterval(function() {

    //try finding video tag in the web page every 2 seconds until any video element is found.
    result=document.getElementsByTagName("video");
    if(result.length!=0){
        clearInterval(findVideoTag);
    }
},2000);

//listening to message sent from background script i.e. popup.js 
chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(msg,sender,sendResponse){
    if(msg.type=="ENQUIRE_SPEED"){
        sendResponse({playbackspeed:result[0].playbackRate});
    }
    if(msg.type=="CHANGE_SPEED"){
        result[0].playbackRate=msg.speed;
    }
}
