//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const loading = `<div id='loading'>
						<p>Loading</div>
				  </div>
`

const error = `<div id='error'>
						<p>Error</div>
				  </div>
`


const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(imageObj){
	return new Promise((res, rej) => {
		const image = new Image();

		image.url = imageObj.url;

		image.onload = () => resolve(img);
		image.onerror = () => reject();
		
	})
}

function downloadImages(params) {
	output.innerHMTL = loading;

	const imagePromises = imageUrls.map(downloadImage);
	 Promise.all(imagePromises)
    .then((images) => {
      output.innerHTML = "";

      images.forEach((img) => output.appendChild(img));
    })
    .catch((err) => {
      output.innerHTML = error;
    });
}

downloadImages();