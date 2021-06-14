const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = 'fluid pause turtle sadness carbon deposit palm used medal dinosaur educate swim';

module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/c52837877f464a6fa8f0a8724628f221")
      },
      network_id: 3,
      gas: 8000000    // May need to change based on current gas   
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
       version: "0.6.6",    // Fetch exact version from solc-bin (default: truffle's version)
        optimizer: {
          enabled: false,
          runs: 200
        }
    }
  },

  db: {
    enabled: false
  }
};
