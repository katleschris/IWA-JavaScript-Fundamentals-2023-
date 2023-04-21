const firstName = 'John';
const age = 35;
const hobby = 'Coding';

const logTwice = (stringNumber) => {
  console.log(stringNumber);
  console.log(stringNumber);
}

const sayHello = () => {
  logTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`);
}

sayHello();