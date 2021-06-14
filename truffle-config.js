const HDWalletProvider = require('@truffle/hdwallet-provider');
const MNEMONIC = 'sign rely vague category half differ document sign wrong dignity write fruit';

module.exports = {
  networks: {
     development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/e61a4e53a99e478a9e3099e52e530fe8")
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
