// scripts/upgrade_box.js
const { ethers, upgrades } = require('hardhat');

async function main () {
  
  // address generated when deployed deployProxy Box
  // the address of our proxy contract from when we deployed our Box contract  
  const proxyAddress = '0xe8CE0a68D882405A1A7B6eAF9F7eDc8058c6BF12';

  const BoxV2 = await ethers.getContractFactory('BoxV2');
  console.log('Upgrading Box...');

  await upgrades.upgradeProxy(proxyAddress, BoxV2);
  console.log('Box upgraded');
}

main().then(() => process.exit(0)).catch(error => {
    console.error(error);
    process.exit(1);
});