// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  
  // address generated when deployed deployProxy Box
  // the address of our proxy contract from when we deployed our Box contract  
  const proxyAddress = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6';

  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');

  const boxv2 = await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log('Box upgraded and address is: ', boxv2.address);
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});