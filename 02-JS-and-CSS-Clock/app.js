const secondsHand = document.querySelector(".second-hand");
const hoursHand = document.querySelector(".hour-hand");
const minsHand = document.querySelector(".min-hand");

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let radius = canvas.width / 2;

function rotateHands() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegree = (seconds / 60) * 360 + 90;

  const mins = now.getMinutes();
  const minsDegree = (mins / 60) * 360 + 90;

  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90;

  secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegree}deg)`;

  drawNumbers(ctx, radius);
}
setInterval(rotateHands, 1000);

function drawNumbers(ctx, radius) {
  ctx.font = radius * 0.15 + "px arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let i = 1; i < 13; i++) {
    let ang = ((i - 90) * Math.PI) / 6;
    ctx.rotate(ang);
    ctx.translate(0, radius * 0.9);
    ctx.rotate(-ang);
    ctx.fillText(i.toString(), radius, radius);
    ctx.rotate(ang);
    ctx.translate(0, -radius * 0.9);
    ctx.rotate(-ang);
  }
}
