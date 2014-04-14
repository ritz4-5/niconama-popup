$(function(){
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
     if(request.greeting == "popup"){
        sendResponse({finish : true});
        window.open(request.openurl,"ニコ生ポップアップ","width=960,height=488,scrollbars=no");

     }
  });


})