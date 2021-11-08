// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Console {
    event LogUint(string, uint256);

    function log(string memory s, uint256 x) public {
        emit LogUint(s, x);
    }

    event LogInt(string, int256);

    function log(string memory s, int256 x) public {
        emit LogInt(s, x);
    }

    event LogBytes(string, bytes);

    function log(string memory s, bytes memory x) public {
        emit LogBytes(s, x);
    }

    event LogBytes32(string, bytes32);

    function log(string memory s, bytes32 x) public {
        emit LogBytes32(s, x);
    }

    event LogAddress(string, address);

    function log(string memory s, address x) public {
        emit LogAddress(s, x);
    }

    event LogBool(string, bool);

    function log(string memory s, bool x) public {
        emit LogBool(s, x);
    }

    event LogString(string);

    function log(string memory s) public {
        emit LogString(s);
    }
}

contract IncrementerLog {
    uint256 public number;

    constructor(uint256 _initialNumber) {
        number = _initialNumber;
    }

    event LogString(string);

    function log(string memory s) public {
        emit LogString(s);
    }

    function increment(uint256 _value) public {
        log("Incrementing by");
        number = number + _value;
    }

    function reset() public {
        log("Resetting to 0");
        number = 0;
    }
}
