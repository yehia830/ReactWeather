var names = ["Andrew", "Julie", "Jen"];

var that = this.names

function add(a,b) {

  return a +b;
  that.names
}



//statement then followed by arguments (a,b) then what you want to happen
//this is not changed like it is in function
var addStatement = (a,b) => a + b;
console.log(addStatement(3,-2));














// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFun', name);
//
// });

// names.forEach((name) => console.log(name))
//
// var returnMe = (name) => name + '!'
// console.log(returnMe('Yehia'));
//
// var person = {
//   name: 'Yehia',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + 'says hi to' + name);
//     })
//   }
// }
//
// // person.greet();
