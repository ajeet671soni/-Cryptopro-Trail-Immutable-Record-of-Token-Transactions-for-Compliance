const hre = require("hardhat");

async function main() {
  const CryptoproTrail = await hre.ethers.getContractFactory("CryptoproTrail");
  const cryptoproTrail = await CryptoproTrail.deploy();

  await cryptoproTrail.deployed();

  console.log("CryptoproTrail deployed to:", cryptoproTrail.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
