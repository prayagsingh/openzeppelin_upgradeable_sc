// SPDX-License-Identifier: Unlicenced

pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts-upgradeable/security/PausableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Box is Initializable, PausableUpgradeable, OwnableUpgradeable {
    
    uint c;
    
    function initialize() initializer public {
        __Pausable_init();
        __Ownable_init();
        c = 10;
    }
    
    // @dev openzeppelin functions
    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function A(uint a, uint b) public view whenNotPaused returns (uint) {
        
        return a + b + c;
    }
}

// Box version v2

/// @title Box version 2 contract
/// @author Prayag Singh
/// @notice This is the updated version of contract Box with some additional function
/// @dev Make sure to inherit the Box contract

contract BoxV2 is Box {

    uint d;
    bool v2Initialized;

    // @note not possible to override the initialize function since it executes only once and not virtual in nature
    // @note In upgradable smart contract we can't change anything in the Box contract. 
    //       we can only add new functions and variables
    // @note https://forum.openzeppelin.com/t/understanding-upgradeable-smart-contract/15485

    function initializeV2() public returns (bool) {
        require(!v2Initialized);
        d = 20;
        v2Initialized = true;
        console.log("v2Initialized is: ", v2Initialized);
        return v2Initialized;
    }

    function B(uint e) public view whenNotPaused returns(uint)  {
        require(v2Initialized);
        uint x = A(1,3) + d + e;
        return x;
    }

    // return true initializeV2 is initialized successfully
    function checkInitializedStatus() public view returns(bool) {

        return v2Initialized;
    }
}