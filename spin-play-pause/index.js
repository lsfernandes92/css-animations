const animation = document.querySelector(".animation")
const playButton = document.querySelector(".play-button")
const pauseButton = document.querySelector(".pause-button")

animation.addEventListener("click", () => {
  const state = animation.style.animationPlayState

  if (state === "paused" || state === "") {
    animation.style.animationPlayState = "running"
  } else {
    animation.style.animationPlayState = "paused"
  }
})

playButton.addEventListener("click", () => animation.style.animationPlayState = "running")
pauseButton.addEventListener("click", () => animation.style.animationPlayState = "paused")