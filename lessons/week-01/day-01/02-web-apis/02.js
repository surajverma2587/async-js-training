const firstName = "Bob";
const lastName = "Smith";

const greeting = () => {
  console.log(`Welcome ${firstName} ${lastName}`);
};

const goodbye = () => {
  console.log(`Goodbye ${firstName} ${lastName}`);
};

setTimeout(greeting, 0);

goodbye();

console.log("end");
