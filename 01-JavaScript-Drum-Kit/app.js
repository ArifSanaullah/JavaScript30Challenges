window.addEventListener("keydown", e => {
  function getElements() {
    const audio = document.querySelector(`audio[data-key='${e.keyCode}']`);

    const key = document.querySelector(`div[data-key='${e.keyCode}']`);
    if (!audio || !key) {
      return;
    } else {
      const elements = [];
      elements.push(audio);
      elements.push(key);
      return elements;
    }
  }

  let elements = getElements();
  if (elements && elements.length === 2) {
    let [audio, key] = elements;
    audio.currentTime = 0; // rewind to start
    audio.play();
    key.classList.add("playing");
  }

  function removeTransition() {
    this.classList.remove("playing");
  }

  const keys = document.querySelectorAll(".key");

  keys.forEach(key => {
    key.addEventListener("transitionend", removeTransition);
  });
});
