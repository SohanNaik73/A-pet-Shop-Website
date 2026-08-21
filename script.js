const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_WEB_APP_URL';

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const submitBtn = document.querySelector('.btn-login');
  submitBtn.innerText = 'Submitting...';
  submitBtn.disabled = true;

  const name = encodeURIComponent(document.getElementById('name').value);
  const petChoice = encodeURIComponent(document.getElementById('petChoice').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const password = encodeURIComponent(document.getElementById('password').value);

  // Construct query URL
  const requestUrl = `${GOOGLE_SCRIPT_URL}?name=${name}&petChoice=${petChoice}&email=${email}&password=${password}`;

  // Send via image tag to completely bypass CORS blocks
  const img = new Image();
  img.src = requestUrl;

  img.onload = img.onerror = function() {
    alert('Submitted! Check your Google Sheet now.');
    document.getElementById('loginForm').reset();
    submitBtn.innerText = 'Login';
    submitBtn.disabled = false;
  };
});
