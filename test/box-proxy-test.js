// test/Box.proxy.js
// Load dependencies
const { expect } = require('chai');
 
let Box;
let box;
 
// Start test block
describe('Box (proxy)', function () {
  
  before(async function () {
    Box = await ethers.getContractFactory("Box");
    // initialize only run once
    box = await upgrades.deployProxy(Box, [], {initializer: 'initialize'});
    //console.log("box is: ", box)
  });
 
  // Test case
  it('This is a negative case for function initialize to check if func initialize works then it wil return a value which is not equal to 3', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    const result = await box.A(1,2);
    //await result.wait();
    console.log(" value of result is: ", result.toString());
    expect(result.toString()).not.equal('3');
  });

  it('Func initialize works and it wil return a value which is equal to 13', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    const result = await box.A(1,2);
    
    console.log(" value of result is: ", result.toString());
    expect(result.toString()).to.equal('13');
  });
});