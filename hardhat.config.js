require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    scroll: {
      url: "https://sepolia-rpc.scroll.io" || "",
      accounts: [
        "35c4f6d88b25ce38c7e3fe19e3accb6cae4eae348b5e0b042f69a1916c3256a9",
      ],
    },
  },
};