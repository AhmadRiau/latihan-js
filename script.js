const disHistory = document.querySelector(".display-history");
const display = document.querySelector(".input");
const tempResult = document.querySelector(".temp-result");

const numbers = document.querySelectorAll(".number")
const operations = document.querySelectorAll(".operation")

const equal = document.querySelector(".equal")
const clearAll = document.querySelector(".all-clear")
const clearLast = document.querySelector(".last-entry-clear")

let disNumb1 = "";
let disNumb2 = "";
let result = null;
let lastOperation = '';
let haveDot = false;

numbers.forEach((number) => {
   number.addEventListener("click", (e) => {
      if (e.target.innerText === "." && !haveDot) {
         haveDot = true;
      } else if (e.target.innerText === "." && haveDot) {       
         return;
      }

      disNumb2 += e.target.innerText;
      display.innerText = disNumb2;
   })
});

operations.forEach((operation) => {
   operation.addEventListener("click", (e) => {
      if(!disNumb2) return;
      haveDot = false;
      const operationName = e.target.innerText;
      if (disNumb1 && disNumb2 && lastOperation){         
         mathOperation()
      } else {
         result = parseFloat(disNumb2);
      }      
      clearDisplay(operationName);
      lastOperation = operationName;
   })   
})

function clearDisplay(name = ""){   
   disNumb1 += disNumb2 + " " + name + " ";
   disHistory.innerText = disNumb1;
   display.innerText = "0";
   disNumb2 = " ";
   tempResult.innerText = result
}

function mathOperation() {
   if (lastOperation === '*') {      
      result = parseFloat(disNumb1) * parseFloat(disNumb2);
   } else if (lastOperation === '+') {
      result = parseFloat(result) + parseFloat(disNumb2);
   } else if (lastOperation === '-') {
      result = parseFloat(result) - parseFloat(disNumb2);
   } else if (lastOperation === '/') {
      result = parseFloat(result) / parseFloat(disNumb2);
   } else if (lastOperation === '%') {
      result = parseFloat(result) % parseFloat(disNumb2);
   }
}

equal.addEventListener("click", () => {
   if (!disNumb1 || !disNumb2) return;
   haveDot = false;
   mathOperation();
   clearDisplay();
   display.innerText = result;;
   tempResult.innerText = "";
   disNumb2 = result;
   disNumb1 = ""
})

clearAll.addEventListener("click", () => {
   disNumb1 = "";
   disNumb2 = "";
   result = '';
   lastOperation = '';
   haveDot = false;
   display.innerText = "0";
   disHistory.innerText = "";
   tempResult.innerText = "0";
})

clearLast.addEventListener("click", () => {
   disNumb2 = "";
   display.innerText = "0";
})

window.addEventListener("keydown", (e) => {
   if (
      e.key === '0'
      || e.key === '1'
      || e.key === '2'
      || e.key === '3'
      || e.key === '4'
      || e.key === '5'
      || e.key === '6'
      || e.key === '7'
      || e.key === '8'
      || e.key === '9'
      || e.key === '.'
   ) {
      clickButton(e.key);
   } else if (
      e.key === '+'
      || e.key === '-'
      || e.key === '*'
      || e.key === '/'
      || e.key === '%'
   ) {
      clickOperations(e.key);
   } else if (e.key == "Enter" || e.key === "=") {
      clickEqual();
   } else if ( e.key == "Backspace") {
      clearLast.click();
   } else if (e.key == "Escape") {
      clearAll.click();
   }
})

function clickButton(key) {
   numbers.forEach((button) => {
      console.log(button.innerText);
      if (button.innerText === key) {
         
         button.click();
      }
   })
}

function clickOperations(key) {
   operations.forEach((operation) => {
     if (operation.innerText === key) {
       operation.click();
     }
   });
 }
 function clickEqual() {
   equal.click();
 }