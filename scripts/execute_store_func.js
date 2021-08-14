const hre = require("hardhat");
require('dotenv').config();

async function main() {

    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);
    
    const Box = await hre.ethers.getContractFactory("Box");
    
    const WALLET_ADDRESS = deployer.address
    console.log("WALLET ADDRESS: ", WALLET_ADDRESS);
    const CONTRACT_ADDRESS = '0xe8CE0a68D882405A1A7B6eAF9F7eDc8058c6BF12';
    const box = Box.attach(CONTRACT_ADDRESS);

    // Setter 
    //const result = await box.store(22);
    //console.log("Executed Store method and result is:", result.data.toString());

    // Getter
    const value = await box.retrieve();
    console.log('Box value is', value.toString());

}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});