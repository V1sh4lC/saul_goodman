const videoPlayer = document.querySelector("#videoPlayer")

document.body.addEventListener('click', () => {
    videoPlayer.style.visibility = "visible"
    videoPlayer.play()
})