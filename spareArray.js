const arr = Array(5);
let newArr = [...arr];
//map()'s  callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.
let newArr2 = [...arr].map((el, i) => i+1)
console.log("Original sparse error with empty slots", arr);
console.log("New array with undefined slots", newArr);
console.log("Transformed new array of numbers", newArr2);