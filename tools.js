

function setVideos(){
    videos = document.getElementsByClassName('video');
    for(const video of videos){
        //check screen aspect ratio
        if (window.innerWidth / window.innerHeight < 1.75){
            video.src = video.children[0].src; // use 16:9 video
        }
        else{
            video.src = video.children[1].src; // use 21:9 video
        }
        video.load();
        video.play();
    }
}