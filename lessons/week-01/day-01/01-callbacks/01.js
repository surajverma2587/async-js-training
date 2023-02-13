const myArray = [10, 20, 30];

const copyArrAndMulBy2 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem * 2);
  }

  return output;
};

const copyArrAndDivBy2 = (array) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    const currentItem = array[i];
    output.push(currentItem / 2);
  }

  return output;
};

const result1 = copyArrAndMulBy2(myArray);

console.log(result1);

const result2 = copyArrAndDivBy2(myArray);

console.log(result2);
