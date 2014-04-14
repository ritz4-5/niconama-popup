$(function(){

	setInterval(function(){
        getBadge();
  }, 1*20000);

  function getBadge(){
    $("a").remove();
    $("#maincontent").load('http://live.nicovideo.jp/my?mypage_top#Favorite_list #subscribeItemsWrap div[class=liveItem] >a, #subscribeItemsWrap div[class=liveItem last] >a, #all_subscribeItemsWrap div[class=liveItem] >a, #all_subscribeItemsWrap div[class=liveItem last] >a,#Favorite_list',
      null,
      function(){
        $("a").attr("target","_blank");
        $("a:odd").remove();
        
        if($("#Favorite_list").size() == 0 && $("#subscribeItemsWrap").size() == 0){
          //ログインしていなかったら
          chrome.browserAction.setBadgeText({text:String("x")});  
        }else if($("#Favorite_list").size() != 0 && $("#subscribeItemsWrap").size() == 0){
          //参加しているコミュニティの放送が0
          chrome.browserAction.setBadgeText({text:String(0)});
        }else{
          $("#Favorite_list").remove();
          var n = $("a").size();
          chrome.browserAction.setBadgeText({text:String(n)});
        }
        

      }
    );
  }
})