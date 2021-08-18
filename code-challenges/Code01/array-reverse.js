const array = [1, 2, 3, 4, 5, 6];

function reverseArray(arr) {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
}

console.log('the orginal array=',array);
console.log('array after reversing=',reverseArray(array));

module.exports=reverseArray;