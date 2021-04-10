// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import { ERC20 } from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract StakingERC20 is ERC20 {
    constructor(uint256 _initialSupply) ERC20("Staking ERC20", "STK") {
        _mint(msg.sender, _initialSupply);
    }
}
