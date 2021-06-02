// Check the Flow starts from Object Creation
var CalculatorApp = (function () {
    // Executed when we create an Object
    function CalculatorApp() {
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }
    CalculatorApp.initialize = function () {
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber');
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber');
        CalculatorApp.operatorButtonElement = document.querySelector('#operator');
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button');
        CalculatorApp.resultButtonElement = document.querySelector('#result-button');
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button');
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button');
        CalculatorApp.divideButtonElement = document.querySelector('#divide-button');
        CalculatorApp.multiplyButtonElement = document.querySelector('#multiply-button');
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button');
    };
    CalculatorApp.addEventListeners = function () {
        CalculatorApp.equalsButtonElement.addEventListener('click', CalculatorApp.calculate);
        CalculatorApp.plusButtonElement.addEventListener('click', CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButtonElement.addEventListener('click', CalculatorApp.changeOperatorMinus);
        CalculatorApp.divideButtonElement.addEventListener('click', CalculatorApp.changeOperatorDivide);
        CalculatorApp.multiplyButtonElement.addEventListener('click', CalculatorApp.changeOperatorMultiply);
        CalculatorApp.clearButtonElement.addEventListener('click', CalculatorApp.clearAll);
    };
    CalculatorApp.calculate = function () {
        var firstNumber = CalculatorApp.firstNumberElement.value;
        var secondNumber = CalculatorApp.secondNumberElement.value;
        var opr = CalculatorApp.operatorButtonElement.textContent.trim(); //create speace ouside the operatotr
        var result = 0;
        if (firstNumber !== '' && secondNumber !== '') {
            var num1 = parseFloat(firstNumber); //converting text to number
            var num2 = parseFloat(secondNumber);
            switch (opr) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                default:
                    result = 0;
                    break;
            }
            CalculatorApp.resultButtonElement.textContent = result.toString();
        }
        else {
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    };
    CalculatorApp.changeOperatorPlus = function () {
        var symbol = CalculatorApp.plusButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;
    };
    CalculatorApp.changeOperatorMinus = function () {
        var symbol = CalculatorApp.minusButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;
    };
    CalculatorApp.changeOperatorDivide = function () {
        var symbol = CalculatorApp.divideButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;
    };
    CalculatorApp.changeOperatorMultiply = function () {
        var symbol = CalculatorApp.multiplyButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;
    };
    CalculatorApp.clearAll = function () {
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorButtonElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    };
    return CalculatorApp;
}());
// Flow Starts Here with object Creation , it calls the Constructor()
var calculator = new CalculatorApp();
