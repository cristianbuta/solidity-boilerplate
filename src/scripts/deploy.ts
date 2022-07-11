import { ethers } from "hardhat";

async function main() {
  const Contract = await ethers.getContractFactory("Contract");
  const contract = await Contract.deploy("This is a hardhat boilerplate!");

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
