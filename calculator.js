"use strict"

const display = document.querySelector(".display");
let expression = "";

display.value = "101010";

function showExpression(value) {
  expression += value;
  display.value = expression;
}

function calculate() {
  try{
    const result = eval(expression).toFixed(2);
    display.value = result;
    expression = result;
  } catch (error) {
    display.value = "Error";
    expression = "";
  }
}

function allClear() {
  expression = "";
  display.value = "";
}

function deleteInput() {
  const trimmedInput = display.value.slice(0, -1);
  display.value = trimmedInput;
  expression = trimmedInput;
}