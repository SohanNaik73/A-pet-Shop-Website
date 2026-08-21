// Replace this with your copied Google Web App URL
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxdJaFeIUq5vu89AMF0gqumC8PWA-M405AAGZGscsRZaWR4Sr0nhuFdVLHCcELKgnEj/exec';

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const submitBtn = document.querySelector('.btn-login');
  submitBtn.innerText = 'Submitting...';
  submitBtn.disabled = true;

  const formData = {
    name: document.getElementById('name').value,
    petChoice: document.getElementById('petChoice').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };

  // Send data to Google Sheets via fetch API
  fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors', // Required for Google Script cross-origin requests
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(() => {
    alert('Login submission successfully sent to Google Sheets!');
    document.getElementById('loginForm').reset();
  })
  .catch((error) => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again.');
  })
  .finally(() => {
    submitBtn.innerText = 'Login';
    submitBtn.disabled = false;
  });
});

function showMessage() {
  alert("Thank you for your interest! Please choose your pet in the login section below.");
}
