



// mainJs.js

// Carousel functionality for image slides
let currentSlide = 0; // Track the current image index
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;

  function moveSlide(direction) {
    currentSlide += direction;

    // Loop back to the beginning/end if out of bounds
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
      currentSlide = 0;
    }

    // Update the position of the carousel
    const carouselImages = document.querySelector('.carousel-images');
    const slideWidth = slides[0].clientWidth; // Get the width of an individual slide
    carouselImages.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
  }

  // Attach moveSlide function to the global scope
  window.moveSlide = moveSlide;
});


// Highlight current day and time in the opening hours table
document.addEventListener("DOMContentLoaded", function () {
  // Get current day and time
  const currentDay = new Date().toLocaleString("en-US", { weekday: "long" });
  const currentTime = new Date();

  // Set opening and closing times for each day (24-hour format)
  const hours = {
    Monday: { open: 8, close: 17 },
    Tuesday: { open: 8, close: 17 },
    Wednesday: { open: 8, close: 17 },
    Thursday: { open: 8, close: 17 },
    Friday: { open: 8, close: 17 },
    Saturday: { open: null, close: null },
    Sunday: { open: null, close: null },
  };

  // Loop through the days in the table
  const rows = document.querySelectorAll("tbody tr");
  rows.forEach((row) => {
    const day = row.id;
    const timeCell = row.querySelector("td.text-right");

    // Highlight the current day with a class instead of inline styles
    if (day === currentDay) {
      row.classList.add("current-day");
    }

    // Get all <th> elements in the table header
    const tableHeaders = document.querySelectorAll("tbody tr th");

    tableHeaders.forEach((header) => {
      const day = header.parentElement.id; // Get the day from the parent row's ID

      // Highlight the current day's <th> element if the day matches the currentDay
      if (day === currentDay) {
        header.classList.add("current-day-day");
      }
    });

    // Determine if the business is open or closed for today
    const openTime = hours[day]?.open;
    const closeTime = hours[day]?.close;

    if (openTime !== null && closeTime !== null) {
      const isOpen =
        currentTime.getHours() >= openTime && currentTime.getHours() < closeTime;

      // Append "Open Now" or "Closed Now" status to the current day's time
      if (day === currentDay) {
        const statusClass = isOpen ? "open-now" : "closed-now";
        timeCell.classList.add(statusClass);
      }
    }
  });
});

// Run includeHTML when the DOM is fully loaded



// Navbar responsive toggle
function myFunction() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
  x.className += " responsive";
} else {
  x.className = "topnav";
}
}
