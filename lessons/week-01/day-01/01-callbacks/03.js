const myArray = [10, 20, 30];

const multiplyBy2 = (input) => {
  return input * 2;
};

const divideBy2 = (input) => {
  return input / 2;
};

const result1 = myArray.map(multiplyBy2);

console.log(result1);

const result2 = myArray.map(divideBy2);

console.log(result2);
