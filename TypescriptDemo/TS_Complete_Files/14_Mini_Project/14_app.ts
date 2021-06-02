// Check the Flow starts from Object Creation
class CalculatorApp {
    private static firstNumberElement:HTMLInputElement;
    private static secondNumberElement:HTMLInputElement;
    private static operatorButtonElement:HTMLButtonElement;
    private static equalsButtonElement:HTMLButtonElement;
    private static resultButtonElement:HTMLButtonElement;
    private static plusButtonElement:HTMLButtonElement;
    private static minusButtonElement:HTMLButtonElement;
    private static divideButtonElement:HTMLButtonElement;
    private static multiplyButtonElement:HTMLButtonElement;
    private static clearButtonElement:HTMLButtonElement;

    // Executed when we create an Object
    constructor(){
        CalculatorApp.initialize();
        CalculatorApp.addEventListeners();
    }

    public static initialize(){
        CalculatorApp.firstNumberElement = document.querySelector('#firstNumber') as HTMLInputElement;
        CalculatorApp.secondNumberElement = document.querySelector('#secondNumber') as HTMLInputElement;
        CalculatorApp.operatorButtonElement = document.querySelector('#operator') as HTMLButtonElement;
        CalculatorApp.equalsButtonElement = document.querySelector('#equals-button') as HTMLButtonElement;
        CalculatorApp.resultButtonElement = document.querySelector('#result-button') as HTMLButtonElement;
        CalculatorApp.plusButtonElement = document.querySelector('#plus-button') as HTMLButtonElement;
        CalculatorApp.minusButtonElement = document.querySelector('#minus-button') as HTMLButtonElement;
        CalculatorApp.divideButtonElement = document.querySelector('#divide-button') as HTMLButtonElement;
        CalculatorApp.multiplyButtonElement = document.querySelector('#multiply-button') as HTMLButtonElement;
        CalculatorApp.clearButtonElement = document.querySelector('#clear-button') as HTMLButtonElement;
    }

    public static addEventListeners(){
        CalculatorApp.equalsButtonElement.addEventListener('click',CalculatorApp.calculate);
        CalculatorApp.plusButtonElement.addEventListener('click',CalculatorApp.changeOperatorPlus);
        CalculatorApp.minusButtonElement.addEventListener('click',CalculatorApp.changeOperatorMinus);
        CalculatorApp.divideButtonElement.addEventListener('click',CalculatorApp.changeOperatorDivide);
        CalculatorApp.multiplyButtonElement.addEventListener('click',CalculatorApp.changeOperatorMultiply);
        CalculatorApp.clearButtonElement.addEventListener('click',CalculatorApp.clearAll);

    }

    public static calculate(){
        let firstNumber = CalculatorApp.firstNumberElement.value;
        let secondNumber = CalculatorApp.secondNumberElement.value;
        let opr = CalculatorApp.operatorButtonElement.textContent.trim();//create speace ouside the operatotr
        let result:number = 0;
        if(firstNumber !== '' && secondNumber !== ''){
            let num1 = parseFloat(firstNumber);//converting text to number
            let num2 = parseFloat(secondNumber);
            switch(opr){
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
        else{
            CalculatorApp.resultButtonElement.textContent = 'RESULT';
        }
    }

    public static changeOperatorPlus(){
        let symbol = CalculatorApp.plusButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;

    }

    public static changeOperatorMinus(){
        let symbol = CalculatorApp.minusButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;
    }

    public static changeOperatorDivide(){
        let symbol = CalculatorApp.divideButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;

    }

    public static changeOperatorMultiply(){
        let symbol = CalculatorApp.multiplyButtonElement.textContent;
        CalculatorApp.operatorButtonElement.textContent = symbol;

    }

    public static clearAll(){
        CalculatorApp.firstNumberElement.value = '';
        CalculatorApp.secondNumberElement.value = '';
        CalculatorApp.operatorButtonElement.textContent = '+';
        CalculatorApp.resultButtonElement.textContent = 'RESULT';
    }
}

// Flow Starts Here with object Creation , it calls the Constructor()
let calculator = new CalculatorApp();