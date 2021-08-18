const BinarySearch = require('./array-binary-search');

it('BinarySearch',()=>{
  
  let test = BinarySearch([1,2,5,4,8],5);
  expect(test).toEqual(2);
});
