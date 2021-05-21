document.addEventListener('DOMContentLoaded', function () {

    var increment_btn = document.getElementById('increment');
    increment_btn.addEventListener('click', function() {
        var currentSpeed=parseFloat(document.getElementById("playbackspeed").innerText);
        currentSpeed+=0.1;
        currentSpeed=currentSpeed.toFixed(1);
        document.getElementById("playbackspeed").innerHTML=currentSpeed;

        let params={
            active:true,
            currentWindow:true
        }
        chrome.tabs.query(params,gotTabs);

        //sending message to content script
        function gotTabs(tabs){
            let msg={
                speed:currentSpeed
            }
            chrome.tabs.sendMessage(tabs[0].id,msg);
        }
    });

    var decrement_btn = document.getElementById('decrement');
    decrement_btn.addEventListener('click', function() {
        var currentSpeed=parseFloat(document.getElementById("playbackspeed").innerText);
        currentSpeed-=0.1;
        currentSpeed=currentSpeed.toFixed(1);
        currentSpeed=(currentSpeed<0.5)?0.5:currentSpeed;
        document.getElementById("playbackspeed").innerHTML=currentSpeed;
        
        let params={
            active:true,
            currentWindow:true
        }
        chrome.tabs.query(params,gotTabs);

        //sending message to content script
        function gotTabs(tabs){
            let msg={
                speed:currentSpeed
            }
            chrome.tabs.sendMessage(tabs[0].id,msg);
        }
    });
});