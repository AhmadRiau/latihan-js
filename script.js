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
   if (lastOperation === 'x') {
      result = parseFloat(result) * parseFloat(disNumb2);
   } else if (lastOperation === '+') {
      result = parseFloat(result) * parseFloat(disNumb2);
   } else if (lastOperation === '-') {
      result = parseFloat(result) * parseFloat(disNumb2);
   } else if (lastOperation === '/') {
      result = parseFloat(result) * parseFloat(disNumb2);
   } else if (lastOperation === '%') {
      result = parseFloat(result) * parseFloat(disNumb2);
   }
}
