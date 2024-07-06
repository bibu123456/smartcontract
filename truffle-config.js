/*
 * For example, your .env file will have the following structure:
 *
 * MNEMONIC = <Your 12 phrase mnemonic>
 * PROJECT_ID = <Your Infura project id>
 *
 * Deployment with Truffle Dashboard (Recommended for best security practice)
 * --------------------------------------------------------------------------
 *
 * Are you concerned about security and minimizing rekt status ?
 * Use this method for best security:
 *
 * Truffle Dashboard lets you review transactions in detail, and leverages
 * MetaMask for signing, so there's no need to copy-paste your mnemonic.
 * More details can be found at 🔎:
 *
 * https://trufflesuite.com/docs/truffle/getting-started/using-the-truffle-dashboard/
 */

// require('dotenv').config();
// const { MNEMONIC, PROJECT_ID } = process.env;

const PrivateKeyProvider = require("@truffle/hdwallet-provider");
const privateKeys = [
  "c87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3",
   "ae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f",
   "8f2a55949038a9610f50fb23b5883af3b4ecb3c3bb792cbcefbd1542c692be63"
];
const privateKeyProvider = new PrivateKeyProvider(
  privateKeys,
  "http://10.0.3.135:8545",
  0,
  3
);

module.exports = {
  networks: {
    besu: {
      provider: privateKeyProvider,
      network_id: '1337',
      production: true,
      hardfork: 'petersburg', // Ensure the hardfork is set to Petersburg
      gas: 8000000, // Set the gas limit
      gasPrice: 1000000000, // Set the gas price (1 gwei)
      
    }
  },

  mocha: {
    // timeout: 100000
  },

  compilers: {
    solc: {
      version: "0.8.13", // Use Solidity compiler version 0.8.13
      settings: {
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "petersburg" // Set the EVM version to Petersburg
      }
    }
  },

  db: {
    enabled: false
  }
};

