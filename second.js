//Write a program to make a simple calculator. [design should be your own similar to window 
//calculator] 
function calculator(operator){

    let num1 =  parseFloat(document.getElementById('num1').value);
    let num2 =  parseFloat(document.getElementById('num2').value);
    let result;
    if(isNaN(num1)||isNaN(num2)){
        document.write("Please input numbers");
    }
    switch(operator){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
            result=num1*num2;
            break;
        case '/':
            result=num1/num2;
            break;
        case '%':
            result=num1%num2;
            break;
        default:
            result="Invalid result";
            break;
    }
    document.getElementById('display-result').innerHTML=result;
    
}

