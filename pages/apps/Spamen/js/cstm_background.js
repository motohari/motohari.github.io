const imageInput = document.getElementById('imageInput');
const preview = document.getElementById('preview');
const STORAGE_KEY = 'uploadedImageBase64';

imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        const base64 = reader.result;
        localStorage.setItem(STORAGE_KEY, base64);

        preview.src = base64;
        preview.style.display = 'block';

        document.body.style.backgroundImage = `url(${base64})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center';
    };
    reader.readAsDataURL(file);
    location.reload();
});

window.addEventListener('load', () => {
    const base64 = localStorage.getItem(STORAGE_KEY);
    if (base64) {
        preview.src = base64;
        preview.style.display = 'block';

        document.body.style.backgroundImage = `url(${base64})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundPosition = 'center top';
    }
});

function clearBackgroundImage() {
    localStorage.removeItem(STORAGE_KEY);

    preview.src = '';
    preview.style.display = 'none';

    document.body.style.backgroundImage = 'none';
}