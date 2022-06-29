const canvas = document.getElementById("canvas1")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})

const mouse = {
  x: undefined,
  y: undefined
}

//dibuja sobre el canvas la figura que uno le pase cuando se haga click
// canvas.addEventListener("click", (e) => {
//   mouse.x = e.x;
//   mouse.y = e.y;
//   drawCircle()
// })

//dibuja sobre el canvas la figura que uno le pase siguiendo el mouse y dejando una huella
canvas.addEventListener("mousemove", (e) => {
  mouse.x = e.x;
  mouse.y = e.y;
  drawCircle()
})

//figura circulo
function drawCircle() {
  ctx.fillStyle = "blue"
  ctx.beginPath();
  ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
  ctx.fill()
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCircle()
  requestAnimationFrame(animate)
}

animate()

