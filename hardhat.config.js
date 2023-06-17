require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/BBp1Og53JAZ6p3MqFtPe-vy3BOkBX4GR",
      accounts: ['0060ae00f4bd35d00ae4d4b06dc850022ed23c24229ae22bc6e6f5369de1e46f', '18bcb9fbc3020273e18ca4fc6c233e4533d744dc85be793c4cd7bce5975c6592']
    }
  }
};
