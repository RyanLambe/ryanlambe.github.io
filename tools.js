

function setVideos(){
    videos = document.getElementsByClassName('playable');
    for(const video of videos){
        video.load();
        video.play();
    }
}