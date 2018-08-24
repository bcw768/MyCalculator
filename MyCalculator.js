var $ = function(id) {
	return document.getElementById(id);
};

var runCalculator= function(){
	var calcChoice, numOne, numTwo, result;
	for(;;){
    calcChoice= parseInt(prompt("Select a numerical option: 1. Add 2. Subtract 3. Multiply 4. Divide 5. Exponent 6. Mean 7. Quit"));

	for(;;){
		if(calcChoice>=1 && calcChoice<=7 && !isNaN(calcChoice)) break;
		calcChoice= parseInt(prompt("Select a numerical option between 1 and 7: 1. Add 2. Subtract 3. Multiply 4. Divide 5. Exponent 6. Mean 7. Quit"));
	}
	
		if(calcChoice==1){
			for(;;){
			numOne= parseFloat(prompt("Enter the first number to be added"));
			numTwo= parseFloat(prompt("Enter the second number to be added"));
			result= numOne + numTwo;
			$("resultBox").value= result;
			break;
			}
		}
		if(calcChoice==2){
			for(;;){
			numOne= parseFloat(prompt("Enter the first number to be subtracted"));
			numTwo= parseFloat(prompt("Enter the second number to be subtracted"));
			result= numOne - numTwo;
			$("resultBox").value= result;
			break;
			}
		}
		if(calcChoice==3){
			for(;;){
			numOne= parseFloat(prompt("Enter the first number to be multiplied"));
			numTwo= parseFloat(prompt("Enter the second number to be multiplied"));
			result= numOne * numTwo;
			$("resultBox").value= result;
			break;
			}
		}
		if(calcChoice==4){
			for(;;){
			numOne= parseFloat(prompt("Enter the first number to be divided"));
			numTwo= parseFloat(prompt("Enter the second number to be divided"));
			result= numOne/numTwo;
			$("resultBox").value= result;
			break;
			}
		}
		if(calcChoice==5){
			for(;;){
			numOne= parseFloat(prompt("Enter the base number"));
			numTwo= parseFloat(prompt("Enter the exponent number"));
			result= Math.pow(numOne, numTwo);
			$("resultBox").value= result;
			break;
			}
		}
		if(calcChoice==6){
			var nextNum, total=0, counter=0;
			nextNum= prompt("Enter the first number to be averaged, *** to quit.");
			for(;;){
				if(nextNum=="***") break;
					
				if(isNaN(nextNum)){
					nextNum= prompt("Enter the numbers to be averaged one at time, *** to quit.");
				}
				counter++;
				nextNum=parseInt(nextNum);
				total += nextNum;
				nextNum= prompt("Enter the next number to be averaged, *** to quit.");
				
			
			result= (total/counter);
			}
			
			/*for(;;){
				nextNum= prompt("Enter the numbers to be averaged. When done, type \"***\"");
				if(!isNaN(parseFloat(nextNum))){
					total= parseFloat(nextNum + total);
					counter++;
					result= total/counter;
				}
				*/
			$("resultBox").value= (result);
			break;
			
		}
		if(calcChoice==7){
			alert("Thanks for using the calculator.");
			break;
		} 
		}
};


window.onload=function(){
    $("runCalculator").onclick=runCalculator;
};