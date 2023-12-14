"use strict";

// // converting numbers
// // decimal to binary, octal and hexa
// const decimalNumber = 45;
// const binaryNumber = decimalNumber.toString(2);
// const octalNumber = decimalNumber.toString(8);
// const hexaNumber = decimalNumber.toString(16);
// // console.log(binaryNumber);

// // binary to decimal
// const binaryStr = "101010";
// const decimal0fbinaryStr = parseInt(binaryStr, 2);
// // console.log(decimal0fbinaryStr);

// // octal t0 decimal
// const octalStr = "45";
// const decimalOfOctalStr = parseInt(octalStr, 8);
// // console.log(decimalOfOctalStr);

// // Number. isInteger()
// const num = 10;

// if(Number.isInteger(num)) {
//   console.log (`${num} is an integer.`);
// }else {
//   console.log(`${num} is not an integer.`);
// }

// // isNaN
// const str = "hello";

// if(isNaN(str)) {
//   console.log(`${str} is not a number`);
// }else{
//   console.log(`${str} is a number`);
// }

// parseInt
// const padding = "10px";
// const paddingInNumber = parseFloat(padding);
// console.log(paddingInNumber);

// const padding = "10.467";
// const paddingInNumber = +(padding);
// console.log(paddingInNumber);

// math
// 2^8
// console.log(Math.pow(2, 8));
// console.log(Math.sqrt(25));
// console.log(Math.abs(10));
// console.log(Math.sin(30));
const floatNum = 2.99999;
// // console.log(Math.round(floatNum));
// console.log(Math.ceil(floatNum)); // 3
// console.log(Math.floor(floatNum)); // 2
// console.log(Math.trunc(floatNum)); // 2

// dates
// const currDate = new Date();

// console.log(currDate);

const currDate = new Date();
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth()); // 0-11
// console.log(currDate.getDate()); // 1-31
// console.log(currDate.getDay()); // 0-6
// console.log(currDate.getHours());
// console.log(currDate.getMinutes());
// console.log(currDate.getSeconds());

// const formattedDate = currDate.toLocaleDateString("bn-BD",{
//   year: "numeric",
//   month:"long",
//   day:"2-digit",
// });

// const formattedDate = currDate.toLocaleDateString("en-us",{
//   year: "numeric",
//   month:"long",
//   day:"2-digit",
// });

// console.log(formattedDate);

// console.log(new Date().getFullYear() - 1993);

// const presentDate = new Date().getTime();
// const futureDate = new Date(presentDate.getTime() + 24 * 60 * 60 * 1000);

// console.log(futureDate);

// const pastDate = new Date(presentDate.getTime() - 24 * 60 * 60 * 1000);
// console.log(pastDate);

// const birthDate = new Date("12/30/1993").getTime();
// const presentDate = new Date().getTime();
// console.log(presentDate - birthDate);
// console.log((presentDate - birthDate) / (365 * 24 * 60 * 60 * 1000));

// // setTimeout
// function greet() {
//   console.log("Hello World");
// }

// // console.log("I am first");
// // setTimeout(greet, 5000); // 3s
// // console.log("I am last");

// setTimeout(() => {
//   const a = 10;
//   const b = 20;
//   const c = a + b;
//   console.log(c);
// }, 2000);

// setInterval()
// const myInterval = setInterval(() =>{
//   console.log(new Date().toLocaleTimeString());
// }, 1000);

// setTimeout(() => {
//   clearInterval(myInterval);
// }, 10000);

const clock = document.querySelector(".Clock");

// setInterval(() => {
//   const time = new Date().toLocaleTimeString("bn-BD", {
//     dayPeriod: "long",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit"
//     });
//   clock.textContent = time;
// }, 1000);

// function buildClock() {
//   const myInterval = setInterval(() =>{
//     const time = new Date().toLocaleTimeString("bn-BD", {
//       hour: "2-digit",
//       minute: '2-digit',
//       second: "2-digit",
//       dayPeriod: "long",
//     });

//     clock.textContent = time;
//   }, 1000);//1s

//   stopClock(myInterval);
// }

// function stopClock(myInterval) {
//   setTimeout(() => {
//     clearInterval(myInterval);
//     clock.textContent = "এখন ঘড়ি বন্ধ";

//   setTimeout(buildClock, 2000)
//   }, 3000);
// }

// buildClock();

// math random()
// console.log(Math.ceil(Math.random() * 100));
// console.log(Math.floor(Math.random() * 100) + 1);

const randomPassGen = (digitLimit = 6) => {
  const materials =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890@#$%&*({[]}).,/";
  let pass = "";

  for (let i = 0; i <= digitLimit; i++) {
    pass += materials[Math.ceil(Math.random() * materials.length) - 1];
  }

  return pass;
};

// console.log(randomPassGen(8));
