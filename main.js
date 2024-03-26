// Using addEventListener to add items by clicking on Add button
document.querySelector("#addButton").addEventListener("click", function(e) {
    e.preventDefault();
    add();
});

function add() {
    console.log("Running add function");
    // Get input values
    const userInput = document.getElementById("userInput");
    const category = document.getElementById("category");
    let newItem = userInput.value.trim();
    let dropDown = category.value;

    // Deleting the border color when the add button is clicked
    document.getElementById("userInput").classList.remove("border-blue-600");
    document.getElementById("category").classList.remove("border-purple-600");


    // Validating
    if (isValidated(newItem, dropDown)) {
        // Create new list item
        const listItem = document.createElement("li");
        listItem.classList.add("items-center", "py-2");
        listItem.innerHTML = `
        <span class="m-3">↪️ ${newItem}</span>
        <span class="ml-3 rounded ${getCategoryClass(dropDown)}">${dropDown}</span>
        `;
    
        // (Append) Display the new item that the user entered and add it to the end of the "list-items"
        document.querySelector("#list-items").appendChild(listItem);

        // Clear the inputs
        document.querySelector("#userInput").value = "";
        document.querySelector("#category").value = "";
    } else {
        console.log("Invalid inputs");
    }
}
// Getting Tailwind Css according to the category selected
function getCategoryClass(dropDown) {
    const categoryClasses = {
      "high priority": "bg-green-200",
      "medium priority": "bg-blue-200",
      "low priority": "bg-pink-300",
    };
  
    return categoryClasses[dropDown];
}

function isValidated(userInput, category) {
    console.log("Running isValidated function!");
    let isValid = false;
    const userInputField = document.querySelector("#userInput");
    const categoryField = document.querySelector("#category");

    // Reset border colors
    userInputField.classList.remove("border-blue-600", "border-purple-600");
    categoryField.classList.remove("border-blue-600", "border-purple-600");

    // Check that the text input has at least one character and that a dropdown option is chosen. 
    if (userInput.length <= 0 && category.length == "") {
        userInputField.classList.add("border-red-500");
        categoryField.classList.add("border-red-500");
    } else if (userInput.length <= 0) {
        userInputField.classList.add("border-red-500");
        categoryField.classList.remove("border-red-500");
    } else if (category.length <= 0) {
        userInputField.classList.remove("border-red-500");
        categoryField.classList.add("border-red-500");
    } else {
        isValid = true;
        userInputField.classList.remove("border-red-500");
        categoryField.classList.remove("border-red-500");
    }

    // Remove red border if the user starts typing in the input fields
    userInputField.addEventListener("input", function() {
        if (this.value.trim().length > 0) {
            this.classList.remove("border-red-500");
        }
    });

    categoryField.addEventListener("input", function() {
        if (this.value.trim().length > 0) {
            this.classList.remove("border-red-500");
        }
    });
    return isValid;
}
