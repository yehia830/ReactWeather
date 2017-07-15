// function getTempCallback(location, callback){
//   callback(undefined,78);
//   callback('City not found');
// }
//
// getTempCallback('Philadelphia', function (err, temp) {
//   if(err){
//     console.log("error", err);
//   }else{
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve,reject) {
//       setTimeout(function() {
//         resolve(79);
//         reject('City not found')
//       },1000)
//   });
// };
// getTempPromise('Philadelphia').then(function (temp) {
//   console.log('success', temp);
// }), function (err) {
//   console.log('error',err);
// };



function addPromise(a,b) {
return new Promise(function(resolve,reject) {
  setTimeout(function() {
    if(typeof a === 'number' && typeof b ==='number'){
      resolve(a + b);
    }
    else{
      reject('Not valid number')
    }
  });
});
}

addPromise(1,2).then(function (ans) {
  console.log('success', ans);

}, function (err) {
  console.log('error', err);
});
addPromise(1,"a").then(function (ans) {
  console.log('this should not appear');

}, function (err) {
  console.log('this should appear', err);
});
