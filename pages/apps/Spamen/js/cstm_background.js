const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const STORAGE_KEY = 'uploadedImageBase64';

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        const image = new Image();
        image.onload = () => {
            const aspectRatio = window.innerWidth / window.innerHeight;
            const imageRatio = image.width / image.height;
            let cropWidth = image.width;
            let cropHeight = image.height;
            let cropX = 0;
            let cropY = 0;

            if (imageRatio > aspectRatio) {
                cropWidth = image.height * aspectRatio;
                cropX = (image.width - cropWidth) / 2;
            } else {
                cropHeight = image.width / aspectRatio;
                cropY = (image.height - cropHeight) / 2;
            }

            const canvas = document.createElement('canvas');
            canvas.width = Math.round(cropWidth);
            canvas.height = Math.round(cropHeight);
            canvas.getContext('2d').drawImage(
                image,
                cropX, cropY, cropWidth, cropHeight,
                0, 0, canvas.width, canvas.height
            );

            const croppedImage = canvas.toDataURL('image/jpeg', 0.9);
            localStorage.setItem(STORAGE_KEY, croppedImage);
            setBackgroundImage(croppedImage);
        };
        image.src = reader.result;
    };
    reader.readAsDataURL(file);
});

function setBackgroundImage(base64) {
    preview.src = base64;
    preview.style.display = 'block';
    document.documentElement.style.minHeight = '100%';
    document.body.style.minHeight = '100vh';
    document.body.style.backgroundImage = `url(${base64})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundAttachment = 'fixed';
}

window.addEventListener('load', () => {
    const base64 = localStorage.getItem(STORAGE_KEY);
    if (base64) {
        setBackgroundImage(base64);
    }
});

function clearBackgroundImage() {
    localStorage.removeItem(STORAGE_KEY);

    preview.src = '';
    preview.style.display = 'none';

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundAttachment = '';
}