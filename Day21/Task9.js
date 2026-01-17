// Combine two arrays using concat() or spread syntax [...a, ...b].
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let combined1 = arr1.concat(arr2);
console.log("Combined with concat:", combined1);

let combined2 = [...arr1, ...arr2];
console.log("Combined with spread:", combined2);
