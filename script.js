const method = {
    ADDITION: "+",
    SUBTRACTION: "-",
    MULTIPLICATION: "*",
    DEVISION: "/"
}

function startCalculator() {
    loadStringUtilityFunctions()
    alert("Welcome to My Calculator!");
    const { num1, num2, operation } = getOperationData();
    
    switch (operation) {
        case method.ADDITION: handleAddition(num1, num2); break;
        case method.SUBTRACTION: handleSubtraction(num1, num2); break;
        case method.MULTIPLICATION: handleMultiplikation(num1, num2); break;
        case method.DEVISION: handleDivision(num1, num2); break;
        default: handleDefault(); break;
    }

    alert("Thank you for using My Calculator! Goodbye!");
}

function loadStringUtilityFunctions () {
    const removeAllWhiteSpacesRegEx = /\s+/g;
    const emptyString = "";
    String.prototype.removeAllWhitespaces = function () {
        return this.replace(removeAllWhiteSpacesRegEx, emptyString);
    }
}

function getOperationData () {
    const num1 = parseFloat(prompt("Enter the first number:")
        .removeAllWhitespaces());
    const num2 = parseFloat(prompt("Enter the second number:")
        .removeAllWhitespaces());
    const operation = prompt("Enter the calculation method (+, -, *, /):")
        .removeAllWhitespaces();
    return { num1, num2, operation };
}

function handleAddition (num1, num2) {
    const result = num1 + num2;
    alert(`The result of ${num1} + ${num2} is ${result}`);
}

function handleSubtraction (num1, num2) {
    const result = num1 - num2;
    alert(`The result of ${num1} - ${num2} is ${result}`);
    
}

function handleMultiplikation (num1, num2) {
    const result = num1 * num2;
    alert(`The result of ${num1} * ${num2} is ${result}`);
}

function handleDivision (num1, num2) {
    if (num2 !== 0) {
        const result = num1 / num2;
        alert(`The result of ${num1} / ${num2} is ${result}`);
    } else {
        alert("Error: Division by zero is not allowed.");
    }
}

function handleDefault () {
    alert("Error: Invalid calculation method.");
}
