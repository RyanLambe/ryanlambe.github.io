

function setVideos(newVid){

    prefix = '';
    if(window.innerWidth / window.innerHeight < 1.75){
        prefix = 'videos/';
    }
    else{
        prefix = 'videos/21by9-';
    }

    list = document.getElementsByClassName('video');
    for(let i = 0; i < list.length; i++){
        list[i].src = prefix + list[i].id + '.mp4';
        list[i].load();
    }
}

i = 0
function changeImg(forewards, folderName, max){
    img = document.getElementById("img")
    if(forewards){
        if(i == max)
            i = 0
        else
            i++
    }
    else{
        if(i == 0)
            i = max
        else
            i--
    }
    img.src = folderName + "/" + i + ".png"
    console.log(i)
}