const myArray = [10, 20, 30];

const copyArrayAndManipulate = (array, manipulator) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    const result = manipulator(currentItem);
    output.push(result);
  }

  return output;
};

const multiplyBy2 = (input) => {
  return input * 2;
};

const divideBy2 = (input) => {
  return input / 2;
};

const result1 = copyArrayAndManipulate(myArray, multiplyBy2);

console.log(result1);

const result2 = copyArrayAndManipulate(myArray, divideBy2);

console.log(result2);
