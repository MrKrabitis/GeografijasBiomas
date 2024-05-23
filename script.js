//Javascript kods priekš "Atpakaļ uz augšu" pogas
var backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

backToTop.addEventListener('click', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const colorImage = document.getElementById('color-image');

const colors = [
  { red: 249, green: 74, blue: 0 },
  { red: 0, green: 255, blue: 0 },
  { red: 255, green: 255, blue: 255 },
  { red: 249, green: 178, blue: 51 },
  { red: 191, green: 160, blue: 234 },
  { red: 0, green: 84, blue: 0 },
  { red: 69, green: 177, blue: 69 },
  { red: 255, green: 255, blue: 0 },
  { red: 214, green: 37, blue: 255 },
];

const linkPages = [
  "desert.html",
  "jungle.html",
  "ice.html",
  "savanna.html",
  "tundra.html",
  "taiga.html",
  "forest.html",
  "stepe.html",
  "cietlapji.html",
];

colorImage.addEventListener('click', (event) => {
  const clickedX = event.offsetX;
  const clickedY = event.offsetY;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  canvas.width = colorImage.width;
  canvas.height = colorImage.height;
  context.drawImage(colorImage, 0, 0);
  const imageData = context.getImageData(clickedX, clickedY, 1, 1).data;

  // Check for each color in the array
  for (let i = 0; i < colors.length; i++) {
    const targetColor = colors[i];
    if (imageData[0] === targetColor.red && imageData[1] === targetColor.green && imageData[2] === targetColor.blue) {
      window.location.href = linkPages[i]; // Redirect to corresponding page
      return; // Exit loop after finding a match
    }
  }
});




