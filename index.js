// Remove the <main> element with id 'main'
const main = document.getElementById("main");
if (main) {
  main.remove();
}

// Create a new <h1> element and assign it to newHeader
const newHeader = document.createElement("h1");

// Set the id of newHeader to 'victory'
newHeader.id = "victory";

// Set the text content of newHeader (replace 'YOUR-NAME' with your name)
newHeader.textContent = "Nicholas is the champion";

// Append newHeader to the body
document.body.appendChild(newHeader);
