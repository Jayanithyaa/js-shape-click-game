// Record the start time when the page loads
var start = new Date().getTime();

// Function to generate a random color
function getRandomColour() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to make the shape appear at random positions with random colors
function shapeAppear() {
  var top = Math.random() * 550;
  var left = Math.random() * 550;
  var width = Math.random() * 150;

  if (Math.random() > 0.5) {
    document.getElementById("shape").style.borderRadius = "50%";
  } else {
    document.getElementById("shape").style.borderRadius = "0%";
  }
  document.getElementById("shape").style.height = width + "px";
  document.getElementById("shape").style.width = width + "px";
  document.getElementById("shape").style.top = top + "px";
  document.getElementById("shape").style.left = left + "px"; // Corrected the left position
  document.getElementById("shape").style.display = "block";
  document.getElementById("shape").style.backgroundColor = getRandomColour();

  // Update the start time when the shape appears
  start = new Date().getTime();
}

// Function to delay the appearance of the shape
function shapeAppearDelay() {
  setTimeout(shapeAppear, Math.random() * 1000);
}

// Call the function to make the shape appear with a delay
shapeAppearDelay();

// Event listener for clicking on the shape
document.getElementById("shape").onclick = function () {
  // Hide the shape when clicked
  document.getElementById("shape").style.display = "none";
  // Record the end time when the shape is clicked
  var end = new Date().getTime();
  // Calculate the time taken to click the shape
  var time = (end - start) / 1000;
  // Display the time taken
  document.getElementById("time").innerHTML = time + " S";
  // Make the shape appear again after it's clicked
  shapeAppearDelay();
};
