async function compressImage() {
const imageFile = document.getElementById('imageInput').files[0];
if (!imageFile) return alert("Please select an image");

const options = {
maxSizeMB: 0.5,
maxWidthOrHeight: 1024,
useWebWorker: true
};

const compressedFile = await imageCompression(imageFile, options);

const link = document.getElementById('downloadLink');
link.href = URL.createObjectURL(compressedFile);
link.download = "compressed.jpg";
link.classList.remove('d-none');
}

