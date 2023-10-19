const happybtn = document.getElementById("happybtn");
const sadbtn = document.getElementById("sadbtn");
const angrybtn = document.getElementById("angrybtn");

happybtn.addEventListener("click", function() {
    const happyColor = ["#ff9a55", "#ffea6c", "#54fffb", "#e7b2ff", "#89ffcc"];
    const randomHappyColor = happyColor[Math.floor(Math.random()*5)];
    document.body.style.backgroundColor = randomHappyColor;
    document.getElementById("color").innerHTML = randomHappyColor;
  });

sadbtn.addEventListener("click", function() {
    const sadColor = ["#2a3b90", "#2c345c", "#0c0d49", "#183a23", "#0f0f18"];
    const randomSadColor = sadColor[Math.floor(Math.random()*5)];
    document.body.style.backgroundColor = randomSadColor;
    document.getElementById("color").innerHTML = randomSadColor;
  });

angrybtn.addEventListener("click", function() {
    const angryColor = ["#e72222", "#c92929", "#b82f2f", "#ab3232", "#963232"];
    const randomAngryColor = angryColor[Math.floor(Math.random()*5)];
    document.body.style.backgroundColor = randomAngryColor;
    document.getElementById("color").innerHTML = randomAngryColor;
  });







