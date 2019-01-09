
// var square = (x) => {
//   var result = x * x;
//   return result;
// }
//orrrr
var square = x => x * x;
console.log(square(9));

var user = {
  name: 'Brian',
  //Wrong syntax for classes
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);  //does not accept 'this' keyword
  },
  //Correct syntax for functions
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`);  //does accept 'this' keyword
  }
};
user.sayHi();
user.sayHiAlt(1, 2, 3);
