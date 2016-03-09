
var screen = document.getElementsByClassName("display");
var display = 0;
var nums = [];
var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");
var multiply = document.getElementsByClassName("multiply");
var divide = document.getElementsByClassName("divide");
var equals = document.getElementsByClassName("equals");
var clear = document.getElementsByClassName("clear");
var keypad = document.getElementsByClassName("button");
var operator = 0;
var total = 0;
var firstNum = 0;
var secondNum = 0;

plus[0].addEventListener("click", plusPress);
minus[0].addEventListener("click", minusPress);
multiply[0].addEventListener("click", multiplyPress);
divide[0].addEventListener("click", dividePress);
equals[0].addEventListener("click", equalsPress);
clear[0].addEventListener("click", clearPress);

for(i = 0;i < keypad.length; i++ ){
	keypad[i].addEventListener("click", keyPress);
	}

console.log(plus[0]);


function keyPress(e){
    
    e = window.event;
    target = e.target.value[0];
        console.log(target);
        display += target;
        $(".display").append(target);
        nums.push(target);
    }
    function plusPress(e){
    	target = e.target.value[0]
    	console.log("plus");
    	if(operator == 0 ){
    		firstNum = nums.join("");
    		console.log(firstNum)
    		nums = [];
    	$(".display").append(target);
    		operator = "plus";
    		console.log(operator);
    	}
    	else{
    		operator = operator
    	}
    }
    function minusPress(e){
    	target = e.target.value[0];
    	console.log("minus");
    	if(operator == 0 ){
    		firstNum = nums.join("");
    		console.log(firstNum)
    		nums = [];
    	$(".display").append(target);
    		operator = "minus";
    		console.log(operator);
    	}
    	else{
    		operator = operator
    	}
    }

    function multiplyPress(e){
    	e = window.event;
    	target = e.target.value[0];
    	console.log("multiply");
    	if (operator == 0){
    		firstNum = nums.join("");
    		console.log(firstNum)
    		nums = [];
    	$(".display").append(target);
    		operator = "multiply";
    		console.log(operator);
    	}
    	else{
    		operator = operator;
    	}
    }
    function dividePress(e){
    	target = e.target.value[0];
    	console.log("divide");
    	if(operator == 0 ){
    		firstNum = nums.join("");
    		console.log(firstNum)
    		nums = [];
    	$(".display").append(target);
    		operator = "divide";
    		console.log(operator);
    	}
    	else{
    		operator = operator
    	}
    }
    function clearPress(e){
    	console.log("clear");
    	location.reload();

    }

    function equalsPress(d){
    target = d.target.value[0];
    secondNum = nums.join("");
    firstNum = parseInt(firstNum);
	secondNum = parseInt(secondNum);
        console.log("booyah");
        if(operator === "multiply"){
        total = firstNum * secondNum;
    }
		else if(operator === "plus"){
			
        total = firstNum + secondNum;
    }    	
    	else if(operator === "minus"){
			
        total = firstNum - secondNum;
    }  
    	else if(operator === "divide"){
			
        total = firstNum / secondNum;
    }  
        console.log(total)
        total = total.toString();
        total = total.substring(0, 9);
        $(".display").append(" = " + total);

    }

        
