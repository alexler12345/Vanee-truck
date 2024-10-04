

document.getElementById('userForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Error message element
  const errorMessage = document.getElementById('error-message');

  // Basic validation
  if (name === "" || email === "") {
      errorMessage.style.display = 'block';
      errorMessage.textContent = "Name and Email are required!";
      return;
  }

  // If validation passes, display a success message
  alert("Form submitted successfully!");
  errorMessage.style.display = 'none';
  this.reset(); // Reset form fields
});





// Navbar responsive toggle
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
