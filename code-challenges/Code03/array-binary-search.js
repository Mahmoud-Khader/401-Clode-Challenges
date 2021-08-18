
'use strict';


let array=[1,2,5,4,8];


function BinarySearch(arr, value) {
    let lowValue = 0;
    let highValue = arr.length - 1

    while(lowValue <= highValue) {
        let midValue = Math.floor((lowValue + highValue) / 2)
        let middleItem = arr[midValue]
        if(middleItem === value) {
            return midValue
        }
    
        if(middleItem > value) {
            highValue = midValue - 1
        } else {
            lowValue =  midValue + 1
        }

    }    

    return -1
}

console.log('Original array is : ' + array);
console.log( 'After BinarySearch Function : '+ BinarySearch(array,5)); //output 2



module.exports=BinarySearch;