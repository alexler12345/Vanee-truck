
// Navbar responsive toggle
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}


 // Function to toggle the visibility of descriptions
 function toggleDescription(element) {
  const description = element.nextElementSibling;

  if (description.classList.contains("active-description")) {
    description.classList.remove("active-description");
  } else {
    // Collapse all descriptions first
    document.querySelectorAll(".description").forEach((desc) => {
      desc.classList.remove("active-description");
    });
    // Then expand the clicked one
    description.classList.add("active-description");
  }}
