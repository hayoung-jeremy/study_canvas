const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const image1 = new Image();
image1.src = "SLASH21.png";

// image 가 업로드되고 나면 실행할 함수
image1.addEventListener("load", function () {
  // (선택한 이미지 요소, x 좌표, y 좌표, 이미지를 넓이를 canvas 넓이에 맞춘다, 이미지 높이를 canvas 높이에 맞춘다.)
  ctx.drawImage(image1, 0, 0, canvas.width, canvas.height);
});
