
// let fahrenheitTemp = 25;

// tempInC = () => {
//   let result = (fahrenheitTemp - 32) * 5/9;
//   return Math.round(result * 10) / 10;
// }

// console.log(tempInC());


let tempInF = prompt("Enter temperature in fahrenheit");

tempInC = () => {
  let result = (tempInF - 32) * 5/9;
  return Math.round(result * 10) / 10;
}

alert(`${tempInF} °F is ${tempInC()} °C.`);