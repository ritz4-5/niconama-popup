

/* ポップアップボタンを追加する */
$("#watch_title_box .title").append('<input id="popup_button" type="button" value="ポップアップで開く">');

$('#popup_button').click(function(){
    //別ウィンドウで現在URLを開く
    var currentUrl = location.href;
    var requestUrl = makeRequestUrl(currentUrl);
    chrome.runtime.sendMessage({greeting: "popup", openurl: requestUrl},function(response){
        if(response.finish) location.href = "http://live.nicovideo.jp/";
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

function makeRequestUrl(url){
    var popupFlag = "popup=true";
    var requestUrl;
    if(!location.search/*Getリクエストがない場合*/){
        requestUrl = url + "?" + popupFlag;
    }else{
        requestUrl = url + "&" + popupFlag;
    }
    return requestUrl;
}
