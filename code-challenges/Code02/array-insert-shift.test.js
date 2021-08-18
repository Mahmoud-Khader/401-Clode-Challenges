const insertShiftArray=require('./array-insert-shift');

describe('Testing challenge 2', () => {
  it('insertShiftArray', () => {
   let test= insertShiftArray( [5, 6, 8, 9, 10], 7 );
    expect(test).toEqual([5, 6, 8, 7, 9, 10]);
  });
});