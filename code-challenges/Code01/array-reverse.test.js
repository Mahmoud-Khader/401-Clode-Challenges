const reverseArray=require('./array-reverse')

it('reverseArray',()=>{
   let test= reverseArray([1,2,3,4,5,6])
    expect (test).toEqual([6,5,4,3,2,1])
    })