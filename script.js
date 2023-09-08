document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    let currentInput = "";
    let currentOperator = "";
    let firstOperand = "";

    function updateDisplay() {
        let displayText = firstOperand + " " + currentOperator + " " + currentInput;
        display.textContent = displayText.trim();
    }

    function clearCalculator() {
        currentInput = "";
        currentOperator = "";
        firstOperand = "";
        updateDisplay();
    }

    function handleNumberClick(number) {
        if (currentInput === "0" || currentInput === "-0") {
            currentInput = number;
        } else {
            currentInput += number;
        }
        updateDisplay();
    }

    function handleOperatorClick(operator) {
        if (currentOperator && currentInput !== "") {
            calculate();
        }
        currentOperator = operator;
        firstOperand = currentInput;
        currentInput = "";
        updateDisplay();
    }

    function calculate() {
        if (currentOperator && firstOperand && currentInput !== "") {
            switch (currentOperator) {
                case "+":
                    currentInput = String(parseFloat(firstOperand) + parseFloat(currentInput));
                    break;
                case "-":
                    currentInput = String(parseFloat(firstOperand) - parseFloat(currentInput));
                    break;
                case "*":
                    currentInput = String(parseFloat(firstOperand) * parseFloat(currentInput));
                    break;
                case "/":
                    if (parseFloat(currentInput) === 0) {
                        currentInput = "Error";
                    } else {
                        currentInput = String(parseFloat(firstOperand) / parseFloat(currentInput));
                    }
                    break;
            }
            currentOperator = "";
            firstOperand = "";
            updateDisplay();
        }
    }

    document.getElementById("clear").addEventListener("click", clearCalculator);
    document.getElementById("zero").addEventListener("click", () => handleNumberClick("0"));
    document.getElementById("one").addEventListener("click", () => handleNumberClick("1"));
    document.getElementById("two").addEventListener("click", () => handleNumberClick("2"));
    document.getElementById("three").addEventListener("click", () => handleNumberClick("3"));
    document.getElementById("four").addEventListener("click", () => handleNumberClick("4"));
    document.getElementById("five").addEventListener("click", () => handleNumberClick("5"));
    document.getElementById("six").addEventListener("click", () => handleNumberClick("6"));
    document.getElementById("seven").addEventListener("click", () => handleNumberClick("7"));
    document.getElementById("eight").addEventListener("click", () => handleNumberClick("8"));
    document.getElementById("nine").addEventListener("click", () => handleNumberClick("9"));
    document.getElementById("add").addEventListener("click", () => handleOperatorClick("+"));
    document.getElementById("subtract").addEventListener("click", () => handleOperatorClick("-"));
    document.getElementById("multiply").addEventListener("click", () => handleOperatorClick("*"));
    document.getElementById("divide").addEventListener("click", () => handleOperatorClick("/"));
    document.getElementById("decimal").addEventListener("click", () => {
        if (!currentInput.includes(".")) {
            currentInput += ".";
            updateDisplay();
        }
    });
    document.getElementById("equals").addEventListener("click", calculate);
});
