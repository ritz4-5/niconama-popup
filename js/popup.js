
  $(function(){

    /* ポップアップボタンを追加する */
    $("#watch_title_box .title").append('<input id="popup_button" type="button" value="ポップアップで開く">');

    $('#popup_button').click(function(){
        //別ウィンドウで現在URLを開く
        var currentUrl = location.href;
        var popupFlag = "popup=true";
        window.open(currentUrl+popupFlag,"ニコ生ポップアップ","width=960,height=488,scrollbars=no");

    });

    //URLにポップアップフラグが含まれていたらプレイヤーを抜き出す
    if(location.href.indexOf("popup=true") != -1){
        //スクロールバーを非表示
        $('html').css({
            'overflow': 'hidden'
        });

        $("body").html($("#watch_player_box").html());

    }


  })
