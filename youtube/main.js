var player;
var currentPlay=0;  //紀錄目前播第幾首歌
//固定用法，不能改!!!
function onYouTubeIframeAPIReady(){
    // player 是第1行的, player 是index.html 的 id
    player = new YT.Player("player",
    {
        height : "390",
        width : "640",
        videoId : playList[currentPlay],
        playerVars:{
            "autoplay":0,
            "controls":0,
            "start":playTime[currentPlay][0],//開始播放秒數
            "end":playTime[currentPlay][1],  //結束播放秒數
            //"showinfo":0,                  //上放顯示影片標題   //被廢掉了
            "rel":0,                         //代表結束時是否載入相關影片
            "iv_load_policy":3               //3代表可以關掉廣告
        },
        events:{
            "onReady":onPlayerReady,
            "onStateChange":onPlayerStateChange
        }
    });
}
//名子可以自行決定
function onPlayerReady(event){
    $("#playButton").click(function(){
        $("h2").text(player.getVideoData().title);//改標題
        player.playVideo();
    });
}
//名子可以自行決定
function onPlayerStateChange(event){ 
    //當播放結束時
    if(event.data == 0 && (Math.floor(player.getCurrentTime())==playTime[currentPlay][1]))
        {
            if(currentPlay < playList.length - 1)
                {
                    currentPlay++;
                    player.loadVideoById({
                        "videoId":playList[currentPlay],
                        "startSeconds":playTime[currentPlay][0],
                        "endSeconds":playTime[currentPlay][1],
                        "suggestedQuality":"large"
                    });
                }
            else
                {
                    currentPlay=0;
                    player.cueVideoById({       //先在入一首歌，但先不播放
                        "videoId":playList[currentPlay],
                        "startSeconds":playTime[currentPlay][0],
                        "endSeconds":playTime[currentPlay][1],
                        "suggestedQuality":"large"
                });
        }
    }
    if(player.getVideoLoadedFraction()>0)   //>0代表影片已經開始播放
        {                                   //播放時在去取得歌名比較好
            $("h2").text(player.getVideoData().title);
        }
}