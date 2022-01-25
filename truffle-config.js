// environment variables set in the package config
var networkId = process.env.npm_package_config_ganache_networkId;
var gasPrice = process.env.npm_package_config_ganache_gasPrice;
var gasLimit = process.env.npm_package_config_ganache_gasLimit;

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 6500000,
      gasPrice: 25000000000
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
