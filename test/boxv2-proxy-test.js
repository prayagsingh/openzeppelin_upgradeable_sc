// test/BoxV2.proxy.js
// Load dependencies
const { expect } = require('chai');
 
let Box;
let BoxV2;
let box;
let boxV2;
 
// Start test block
describe('BoxV2 (upgrade-proxy)', function () {
  before(async function () {
    Box = await ethers.getContractFactory("Box");
    BoxV2 = await ethers.getContractFactory("BoxV2");
 
    box = await upgrades.deployProxy(Box, [], {initializer: 'initialize'});
    boxV2 = await upgrades.upgradeProxy(box.address, BoxV2);
  });
 
  // Testing Initializing initializeV2
  // it('Checking InitializeV2 initialized or not. Returns true when successful', async function () {
  //   // returns true
  //   const result = await boxV2.initializeV2();

  //   console.log("boxv2 in initializeV2 is: ", boxV2);
  //   console.log("result in initializeV2 is: ", result.value.toString());
  //   // Test if the returned value is the same one
  //   // Note that we need to use strings to compare the 256 bit integers
  //   expect(result).to.equal('true');
  // });

  // Test case
  it('returns 35 as a result when successful', async function () {
    await boxV2.initializeV2();
    const result = await boxV2.B(1);
    console.log("result in B() is: ", result.toString());
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect(result.toString()).to.equal('35');
  });
});