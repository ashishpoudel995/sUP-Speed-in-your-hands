var result=document.getElementsByTagName("video");
var findVideoTag=setInterval(function() {

    //try finding video tag in the web page every 2 seconds until any video element is found.
    result=document.getElementsByTagName("video");
    if(result.length!=0){
        clearInterval(findVideoTag);

        //listening to message sent from background script i.e. popup.js 
        chrome.runtime.onMessage.addListener(gotMessage);
        function gotMessage(msg,sender,sendResponse){
            result[0].playbackRate=msg.speed;
        }
    }
},2000);
