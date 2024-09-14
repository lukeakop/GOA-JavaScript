// Created an array to hold the URLs of the images you want to display
let images = [
  "https://via.placeholder.com/400x300?text=Image+1",
  "https://via.placeholder.com/400x300?text=Image+2",
  "https://via.placeholder.com/400x300?text=Image+3",
  "https://via.placeholder.com/400x300?text=Image+4"
];

//  Set up a letiable to keep track of which image is currently being displayed
let currentIndex = 0;

//  Found the image element in the HTML where we will display the images
let carouselImage = document.getElementById('carouselImage');

// Find the buttons in the HTML that will move us to the next or previous image
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');

// Write a function that will update the image when we click the buttons
function updateImage() {
  // This will change the 'src' attribute of the image to the new image URL
  carouselImage.src = images[currentIndex];
}

// Added an action for when the "Previous" button is clicked
prevBtn.onclick = function() {
  // Move to the previous image. If we're at the first image, go to the last one
  if (currentIndex === 0) {
      currentIndex = images.length - 1;
  } else {
      currentIndex--;
  }
  updateImage();  // Call the function to show the new image
};

// Added an action for when the "Next" button is clicked
nextBtn.onclick = function() {
  // Move to the next image. If we're at the last image, go back to the first one
  if (currentIndex === images.length - 1) {
      currentIndex = 0;
  } else {
      currentIndex++;
  }
  updateImage();  // Call the function to show the new image
};
