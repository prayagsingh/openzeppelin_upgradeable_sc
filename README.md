# Openzeppelin upgradable smart-contract example

Deploy upgradable smart contract using Openzeppelin on Polygon test network

**Commands to create a new project using Hardhat**

1. `mkdir openzeppelin_upgradable_sc`

2. `cd hardhat_polygon_nft`

3. `npm init --yes`

4. `npm install --save-dev hardhat`

5. `npx hardhat`

6. Create an `.env` file and add the private-key and rpc api-key in this file. we require these keys for configuring hardhat.config.js file.

7. Please add this `.env` file to `.gitignore` to avoid putting private information to github.

8. Install `npm i dotenv` package to use the environment variables from `.env` file

9. Since we are using openzeppelin then we have to add some plugins.

    A. `npm install @openzeppelin/contracts`
    
    B. `npm install --save-dev @openzeppelin/hardhat-upgrades`
    
    C. `hardhat-config.js` is already configured to use the `hardhat-upgrade` plugin.

**Compile Project**

`npx hardhat compile`

**Test Project**

`npx hardhat test`

**Deploy Project**

***WARNING:*** This section requires some changes after the recent changes in the code.

1. Deploying `deployProxy` [script](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/main/scripts/deployProxy_box.js) using command `npx hardhat run --network polygon_test scripts/deployProxy_box.js`. please note down the address. we will use it in Step `2.C`.

2. Now interact with `Box` contract by using `Hardhat-console`. Please follow below steps.

    A. `npx hardhat console --network polygon_test`
    
    B. `const Box = await ethers.getContractFactory('Box');`
    
    C. `const box = await Box.attach('<the address of our proxy contract from when we deployed our Box contract>');`
    
    D. `(await box.retrieve()).toString();` Result shoud be `42`. 

3. Now it's time to deploy `BoxV2` smart-contract which contains additional functionality  when compared to `Box` smart-contract.

4. We will be using `upgradeProxy` [script](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/main/scripts/upgradeProxy_box.js) for this operation. But before deploying this script please make sure to replace the address [here](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/7473f927600b716cb9265d3e5dc95d939521781b/scripts/upgradeProxy_box.js#L8) with the address created in Step 1. 

5. Deploy the script using command `npx hardhat run --network polygon_test scripts/upgradeProxy_box.js`

6. Now we have successfully upgraded the smart-contract `Box` to `Boxv2` while ***keeping its state and the same address as before***.

7. Verify the upgradation using below commands.

    A. `npx hardhat console --network polygon_test`
    
    B. `const BoxV2 = await ethers.getContractFactory('BoxV2');`
    
    C. `const box = await BoxV2.attach('< same address as in Step 2.C >');`
    
    D. `(await box.retrieve()).toString();` Result shoud be `42`.
    
    E. execute increment function using command `await box.increment();` 
    
    F. `(await box.retrieve()).toString();` Result should be `43`.

**References:** 

Hardhat [docs](https://hardhat.org/tutorial/setting-up-the-environment.html)

OpenZeppelin [docs v4.x](https://docs.openzeppelin.com/learn/upgrading-smart-contracts#upgrading-a-contract-via-plugins)

***Youtube Video:*** [OpenZeppelin Upgrade contracts](https://www.youtube.com/watch?v=kWUDTZhxKZI)

**Credits**

OpenZeppelin Team
