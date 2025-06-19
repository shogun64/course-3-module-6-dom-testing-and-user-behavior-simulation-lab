// Step 1: Simulate User Behavior
// - Add event listeners for button clicks and form submissions.
// - Use JavaScript to dynamically update the DOM based on user actions.
document.addEventListener("DOMContentLoaded", () => {
const button = document.getElementById("simulate-click");
const formEvent = document.getElementById("user-form");

button.addEventListener("click", () => {
    simulateClick("dynamic-content", "Button Clicked!");
});

formEvent.addEventListener("submit", (event) => {
    event.preventDefault();
    handleFormSubmit("user-form", "dynamic-content");
});
});

// Step 2: DOM Manipulation Functions
// - Implement functions to add, update, and remove DOM elements.
// - Ensure all elements are dynamically created with appropriate attributes and content.

function addElementToDOM(containerId, content){
    const newContent = document.getElementById(containerId);
    const paragraph = document.createElement("p");
    paragraph.textContent = content;
    newContent.append(paragraph);
}

function removeElementFromDOM(elementId){
    const element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

function simulateClick(containerId, content){
    addElementToDOM(containerId, content);
}

function handleFormSubmit(formId, outputId){
    const form = document.getElementById(formId);
    const input = form.querySelector('input[type="text"]');
    const errorMessage = document.getElementById("error-message");
    addElementToDOM(outputId, input.value);
    if (!input || !input.value.trim()) {
        errorMessage.textContent = "Input cannot be empty";
        errorMessage.classList.remove("hidden");
    return;
  }
}

// Step 3: Error Handling
// - Display error messages in the DOM for invalid inputs or missing elements.
// - Create reusable functions to handle common error cases.

// Step 4: Reusable Utilities
// - Create modular utility functions, such as createElement(tag, attributes).
// - Ensure all functions follow DRY principles for maintainability.

module.exports = {
  addElementToDOM,
  removeElementFromDOM,
  simulateClick,
  handleFormSubmit,
};