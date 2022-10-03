

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