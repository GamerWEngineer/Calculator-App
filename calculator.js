var newLine = true; // Flag to indicate if a new line is being started
var value1 = 0; // Variable to store the first value
var value2 = 0; // Variable to store the second value
var currentOperator = ""; // Variable to store the current operator

// Function to handle digit button presses
function digitPressed(button) {
    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false; // Reset the flag after setting the value
    } else {
        var currentValue = document.getElementById("inputBox").value;
        document.getElementById("inputBox").value = currentValue + button;
    }
}

// Function to handle the clear button
function clearInput() {
    document.getElementById("inputBox").value = "0";
    newLine = true;
}

// Function to handle operator button presses
function operatorPressed(operator) {
    currentOperator = operator; // Store the current operator
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true; // Set the flag to true for the next input
}

// Function to handle the equals button
function equalsPressed() {
    value2 = parseInt(document.getElementById("inputBox").value);
    var result = 0; // Variable to store the result of the calculation
    switch (currentOperator) { // Check the current operator and perform the calculation
        case '+':
            result = value1 + value2;
            break;
        case '-':
            result = value1 - value2;
            break;
        case '*':
            result = value1 * value2;
            break;
        case '/':
            if (value2 !== 0) {
                result = value1 / value2;
            } else {
                alert("Cannot divide by zero");
                return;
            }
            break;
        default:
            alert("Please select an operator");
            return;
    }
    document.getElementById("inputBox").value = result;
    value1 = result; // Update value1 to the result for potential further calculations
    value2 = 0; // Reset value2 for the next operation
    newLine = true; // Reset the flag after calculation
}