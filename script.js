const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

// Function that returns a Promise when an image loads
function downloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve(img);
    img.onerror = () => reject(`Failed to load image: ${url}`);
  });
}

// Function to download all images
function downloadImages() {
  // Show loading spinner
  output.innerHTML = `<div id='loading'><p>Loading...</p></div>`;

  // Convert images array → array of Promises
  const imagePromises = images.map((obj) => downloadImage(obj.url));

  // Download all images in parallel
  Promise.all(imagePromises)
    .then((loadedImages) => {
      // Remove loading spinner
      output.innerHTML = "";

      // Append all loaded images to output div
      loadedImages.forEach((img) => output.appendChild(img));
    })
    .catch((err) => {
      // Display error if any image fails
      output.innerHTML = `<div id='error'><p>${err}</p></div>`;
    });
}

// Add event listener for button click
btn.addEventListener("click", downloadImages);
