const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  this.classList.toggle("open");
}

function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

function setDefault() {
    if (this.classList.contains("open")) {
        this.classList.remove("open");
    }
}

panels.forEach(panel => {
    panel.addEventListener("mouseover", toggleOpen);
    panel.addEventListener("transitionend", toggleActive);
    panel.addEventListener('mouseout', setDefault);
});

