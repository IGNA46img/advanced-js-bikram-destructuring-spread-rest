//RESUELVE LOS EJERCICIOS AQUÍ
const empleados = [
  { name: "Luis", email: "Luis@gmail.com" },
  { name: "Ana", email: "Ana@gmail.com" },
  { name: "Andrea", email: "Andrea@gmail.com" },
];
//1º
const ana = empleados[1] 
//2º
const emailLuis = empleados[0].email
//3º
// Inicialmente
let a = 5;
let b = 3;
[b,a] = [a,b]
//4º
const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
// const maximaHoy = HIGH_TEMPERATURES.today;
// const maximaManana = HIGH_TEMPERATURES.tomorrow;
const {today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES
console.log(maximaHoy);
console.log(maximaManana);
//5º
// function sumEveryOther(...arg) {
//   let myResult = 0;
//   for(let i=0; i<arg.length; i++){
//     myResult += arg[i];
//   }
//   return myResult;
// }
// const suma = numeros.reduce((acumulador, num) => acumulador + num, 0);
function sumEveryOther(...arg) {
  return arg.reduce((acumulador, num) => acumulador + num, 0);
}
//6º
// function addOnlyNums(...arg) {
//   let myResult = 0;
//   for(let i=0; i<arg.length; i++){
//     if (typeof arg[i] === 'number') myResult += arg[i];
//   }
//   return myResult;
// }
// numeros.filter(num => num > 10);
function addOnlyNums(...arg) {
  return arg.filter(elem => typeof elem === 'number').reduce((acumulador, num) => acumulador + num, 0);
}
//7º
function countTheArgs(...arg) {
  return arg.length;
}
//8º
function combineTwoArrays(arr1,arr2) {
  const arr3 = [...arr1, ...arr2];
  return arr3;
}
//9º
// function onlyUniques(...arg) {
//   const myObj1 = {...arg};
//   const myObj2 = {};
//   const myReturn = [];
//   for(let i=0; i<arg.length; i++){
//     myObj2 = {...myObj1, myObj1[i]};
//   }
//   return arg.length;
// }
function onlyUniques(...arg) {
  return [...new Set (arg)];
}
// onlyUniques("gato", "pollo", "cerdo", "cerdo"); //["gato", "pollo", "cerdo"]
// onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]
//10
function combineAllArrays(...arrays) {
  let myArray = [];  //Con "const" me da typeError: asignement to constant variable
  for(let i=0; i<arrays.length; i++){
    myArray = [...myArray, ...arrays[i]];
  }
  return myArray;
  // return arrays.flat();
}
//11
function sumAndSquare(...arg) {
  return arg.reduce((acumulador, num) => acumulador + num**2, 0);
}