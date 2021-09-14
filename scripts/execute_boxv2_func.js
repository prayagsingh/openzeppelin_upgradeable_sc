const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    
    const BoxV2 = await hre.ethers.getContractFactory("BoxV2");
    
    const WALLET_ADDRESS = deployer.address
    console.log("WALLET ADDRESS: ", WALLET_ADDRESS);
    // change this address accordingly
    const CONTRACT_ADDRESS = '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6';
    const boxv2 = await BoxV2.attach(CONTRACT_ADDRESS);

    // Setter 
    //const result = await box.store(22);
    //console.log("Executed Store method and result is:", result.data.toString());

    // Getter
    await boxv2.initializeV2();
    const value = await boxv2.B(1);
    console.log('BoxV2.B() value is', value.toString());

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});