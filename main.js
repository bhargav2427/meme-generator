let topTextInput,
  bottomTextInput,
  imageInput,
  generateBtn,
  canvas,
  ctx,
  topTextSizeInput,
  bottomTextSizeInput;

function generateMeme(img, topText, bottomText) {
  canvas.width = img.width;
  canvas.height = img.height;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(img, 0, 0);

  let fontSize = canvas.width / 15;
  ctx.font = "120pt Calibri";
  //   ctx.font = fontSize + "px Impact";
  ctx.fillStyle = "white";
  ctx.strokeStyle = "black";
  ctx.textAlign = "center";
  ctx.lineWidth = 7;
  ctx.textBaseline = "top";
  topText.split("\n").forEach(function (t, i) {
    ctx.strokeText(t, canvas.width / 2, i * fontSize, canvas.width);
    ctx.fillText(t, canvas.width / 2, i * fontSize, canvas.width);
  });

  ctx.textBaseline = "bottom";
  bottomText.split("\n").forEach(function (t, i) {
    ctx.strokeText(
      bottomText,
      canvas.width / 2,
      canvas.height - i * fontSize,
      canvas.width
    );
    ctx.fillText(
      bottomText,
      canvas.width / 2,
      canvas.height - i * fontSize,
      canvas.width
    );
  });

  //   ctx.strokeText(bottomText, canvas.width / 2, canvas.height, canvas.width);
}

function init() {
  topTextInput = document.getElementById("top-text");
  bottomTextInput = document.getElementById("bottom-text");
  imageInput = document.getElementById("image-input");
  generateBtn = document.getElementById("generate-btn");
  canvas = document.getElementById("meme-canvas");
  bottomTextSizeInput = document.getElementById("top-text-size-input");
  topTextSizeInput = document.getElementById("bottom-text-size-input");
  ctx = canvas.getContext("2d");
  canvas.width = canvas.height = 0;
  generateBtn.addEventListener("click", function () {
    let reader = new FileReader();
    reader.onload = function () {
      let img = new Image();
      img.src = reader.result;
      generateMeme(img, topTextInput.value, bottomTextInput.value);
    };
    reader.readAsDataURL(imageInput.files[0]);
  });
}

init();
