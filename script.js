// Accessing the elements
const changeTextButton = document.getElementById('changeTextButton');
const changeStyleButton = document.getElementById('changeStyleButton');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const dynamicText = document.getElementById('dynamicText');
const dynamicElements = document.getElementById('dynamicElements');

// Function to change the text content
changeTextButton.addEventListener('click', function() {
  dynamicText.textContent = "The text content has been changed!";
});

// Function to modify the CSS style
changeStyleButton.addEventListener('click', function() {
  dynamicText.style.color = 'red';
  dynamicText.style.fontSize = '30px';
  dynamicText.classList.toggle('highlight'); // Toggle the highlight class
});

// Function to add a new element
addElementButton.addEventListener('click', function() {
  const newElement = document.createElement('div');
  newElement.textContent = "This is a new dynamically added element!";
  newElement.style.marginTop = '10px';
  dynamicElements.appendChild(newElement);
});

// Function to remove the last added element
removeElementButton.addEventListener('click', function() {
  const lastElement = dynamicElements.lastElementChild;
  if (lastElement) {
    dynamicElements.removeChild(lastElement);
  }
});
