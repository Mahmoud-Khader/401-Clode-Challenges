const fib=require('./fibonacci-sequence')
it('fib',()=>{
    let test = fib(14)
    expect(test).toBe(377)
    })