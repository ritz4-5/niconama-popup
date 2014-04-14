

/* ポップアップボタンを追加する */
$("#watch_title_box .title").append('<input id="popup_button" type="button" value="ポップアップで開く">');

$('#popup_button').click(function(){
    //別ウィンドウで現在URLを開く
    var currentUrl = location.href;
    var popupFlag = "popup=true";
    chrome.runtime.sendMessage({greeting: "popup", openurl: currentUrl+popupFlag},function(response){
        if(response.finish) console.log("returned");
    });
});

//URLにポップアップフラグが含まれていたらプレイヤーを抜き出す
if(location.href.indexOf("popup=true") != -1){
    //スクロールバーを非表示
    $('html').css({
        'overflow': 'hidden'
    });

    $("body").html($("#watch_player_box").html());

}
