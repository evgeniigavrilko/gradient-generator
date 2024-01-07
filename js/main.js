function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  let a = Number(document.getElementById("input-opacity").value);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

function applyRandomGradient() {
  let deg = Number(document.getElementById("input-deg").value);
  let color1 = randomColor();
  let color2 = randomColor();
  document.body.style.backgroundImage = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
  document.getElementById("gradient-block").style.backgroundImage = `linear-gradient(${deg}deg, ${color1}, ${color2})`;

  document.getElementById("color-code").textContent = `background: linear-gradient(${deg}deg, ${color1}, ${color2})`;
  document.getElementById("copy-btn").style.display = "inline";
}

function changeColor() {
  let gradientBlock = document.getElementById("gradient-block");
  let colorCode = document.getElementById("color-code");
  let deg = Number(document.getElementById("input-deg").value);
  let color1 = randomColor();
  let color2 = randomColor();
  gradientBlock.style.backgroundImage = `linear-gradient(${deg}deg, ${color1}, ${color2})`;
  colorCode.textContent = `background: linear-gradient(${deg}deg, ${color1}, ${color2})`;
  document.getElementById("copy-btn").style.display = "inline";
}

function copyCode() {
  let colorCode = document.getElementById("color-code");
  navigator.clipboard.writeText(colorCode.textContent).then(() => {
    alert("Code copied!");
  });
}

document.getElementById("change-button").addEventListener("click", changeColor);
document.getElementById("copy-btn").addEventListener("click", copyCode);

window.onload = applyRandomGradient;