$(function(){
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
     if(request.greeting == "popup"){
        sendResponse({finish : true});
        //window.open(request.openurl,"","width=960,height=488,scrollbars=no");
        chrome.windows.getLastFocused(function(window){
            chrome.windows.create({url:request.openurl,left:window.left + (window.width - 960),top: window.top + (window.height - 488),width:960,height:488,type:"panel"},function(createWindow){
                createWindow.alwaysOnTop = true;

            });
        });


     }
  });


})