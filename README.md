# Openzeppelin upgradeable smart-contract example

Deploy upgradeable smart contract using Openzeppelin on local test network OR polygon test network. This example uses `Transparent Proxy` approach for deploying upgradeable smart contract.

**Commands to create a new project using Hardhat**

1. `mkdir openzeppelin_upgradeable_sc`

2. `cd openzeppelin_upgradeable_sc`

3. `npm init --yes`

4. `npm install --save-dev hardhat`

5. `npx hardhat`

6. Create an `.env` file by renaming `env.example` to `.env` and add the private-key and rpc api-key in this file. we require these keys for configuring hardhat.config.js file. please note that private-key and rpc api-key is only needed when using polygon_test network.

7. Please add this `.env` file to `.gitignore` to avoid putting private information to github.

8. Install `npm i dotenv` package to use the environment variables from `.env` file.

9. We can add more plugins like `hardhat-gas-reporter`, `solidity-coverage` and `hardhat-solhint` using below commands.

    A. `npm install hardhat-gas-reporter --save-dev`. For more info please refer [documentation](https://hardhat.org/plugins/hardhat-gas-reporter.html)

    B. `npm install solidity-coverage --save-dev`. For more info please refer [documentation](https://hardhat.org/plugins/solidity-coverage.html)

    C. `npm install @nomiclabs/hardhat-solhint --save-dev`. For more info please refer [documentation](https://hardhat.org/plugins/nomiclabs-hardhat-solhint.html).

10. Since we are using openzeppelin then we have to add some plugins.

    A. `npm install @openzeppelin/contracts`
    
    B. `npm install --save-dev @openzeppelin/hardhat-upgrades`
    
    C. `hardhat-config.js` is already configured to use the `hardhat-upgrade` plugin.

**Compile Project**

`npx hardhat compile`

**Test Project**

`npx hardhat test`

**Deploy Project**

***WARNING:*** There is some issue with Polygon rpc testnet endpoints. They are not responding well when deploying the upgradeable smart-contract.

1. Open a new terminal and start a hardhat local node using command `npx hardhat node`.

2. Deploying `deployProxy` [script](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/main/scripts/deployProxy_box.js) using command `npx hardhat run --network localhost scripts/deployProxy_box.js`. please note down the address.

3. Lets test the above smart-contract but first lets update the contract address [here](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/71287be9032d9f57b1ac9e6663e76adee90137c4/scripts/execute_boxv1_func.js#L15) in `execute_boxv1_func.js` script. Now let's deploy the script using command `npx hardhat run scripts/execute_boxv1_func.js --network localhost`. It will return `13` as a value.

4. Now it's time to deploy `BoxV2` smart-contract which contains additional functionality  when compared to `Box` smart-contract.

5. We will be using `upgradeProxy` [script](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/main/scripts/upgradeProxy_box.js) for this operation. But before deploying this script, please make sure to replace the address [here](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/71287be9032d9f57b1ac9e6663e76adee90137c4/scripts/upgradeProxy_box.js#L8) with the contract address generated in Step 2. 

6. Deploy the script using command `npx hardhat run --network localhost scripts/upgradeProxy_box.js`

7. Now we have successfully upgraded the smart-contract `Box` to `Boxv2` while ***keeping its state and the same contract address as before***. Compare the output of Step 2 and Step 5. Both are using same contract address.

8. Now lets test the `BoxV2` smart-contract by deploying the `execute_boxv2_func.js` script. But before deploying it, update the contract address [here](https://github.com/prayagsingh/openzeppelin_upgrdabale_sc/blob/71287be9032d9f57b1ac9e6663e76adee90137c4/scripts/execute_boxv2_func.js#L15). Now lets deploy the script using command `npx hardhat run scripts/execute_boxv2_func.js --network localhost`. It will return `35` as a value.

**References:** 

Hardhat [docs](https://hardhat.org/tutorial/setting-up-the-environment.html)

OpenZeppelin [docs v4.x](https://docs.openzeppelin.com/learn/upgrading-smart-contracts#upgrading-a-contract-via-plugins)

***Youtube Video:*** [OpenZeppelin Upgrade contracts](https://www.youtube.com/watch?v=kWUDTZhxKZI)

**Credits**

OpenZeppelin Team
