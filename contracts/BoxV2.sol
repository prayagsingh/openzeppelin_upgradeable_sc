// contracts/BoxV2.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract BoxV2 {
    // ... code from Box.sol
    uint256 private _value;

    event ValueChanged(uint256 value);

    // The onlyOwner modifier restricts who can call the store function
    function store(uint256 value) public {
        _value = value;
        emit ValueChanged(value);
    }

    function retrieve() public view returns (uint256) {
        return _value;
    }
    // Increments the stored value by 1
    function increment() public {
        _value = _value + 1;
        emit ValueChanged(_value);
    }
}