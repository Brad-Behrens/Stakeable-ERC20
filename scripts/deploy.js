// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const initialSupply = 1000000;

  const StakingERC20 = await hre.ethers.getContractFactory("StakingERC20");
  const stakingERC20 = await StakingERC20.deploy(initialSupply);

  await stakingERC20.deployed();

  console.log("Staking ERC20 token deployed to:", stakingERC20.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
