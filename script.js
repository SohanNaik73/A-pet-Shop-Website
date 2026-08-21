document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault();

  // Retrieve form values
  const name = document.getElementById('name').value;
  const petChoice = document.getElementById('petChoice').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Format the collected data
  const timeStamp = new Date().toLocaleString();
  const fileContent = 
`===================================
   HAPPY PAWS PET SHOP - LOGIN LOG
===================================
Date & Time : ${timeStamp}
Name        : ${name}
Pet Interest: ${petChoice}
Email       : ${email}
Password    : ${password}
===================================`;

  // Create a Blob with the text data
  const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });

  // Create a temporary hidden anchor element to trigger download
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${name.trim().replace(/\s+/g, '_')}_login_info.txt`;

  // Trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up
  document.body.removeChild(link);
  URL.revokeObjectURL(link.href);

  // User feedback
  alert(`Thank you, ${name}! Your details have been downloaded.`);
  
  // Reset form fields
  document.getElementById('loginForm').reset();
});

// Function for "Adopt Today" button
function showMessage() {
  alert("Thank you for your interest! Please choose your pet in the login section below.");
}
