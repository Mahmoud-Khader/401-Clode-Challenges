'use strict';
let array1 = [5, 6, 8, 9, 10];
// let array2 = [42, 8, 15, 23, 42];

function insertShiftArray(arr,num){
  let newArray=[];
  let middleNum=Math.round(arr.length/2);
  arr.forEach((ele,idx)=>{
      if(idx!==middleNum){
          newArray.push(ele)
      }else{
          newArray.push(num)
          newArray.push(ele)
      }
  })
  return newArray
}

console.log(insertShiftArray(array1, 7));
// console.log(insertShiftArray(array2, 16));

module.exports=insertShiftArray;