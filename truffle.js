const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
const mnemonic = 'space wall opera enemy broccoli know peanut vibrant alcohol wage lottery trip';
module.exports = {
    networks: {
        development: {
            host: '127.0.0.1',
            port: 8545,
            network_id: '*' // Match any network id
        },
        matic: {
            provider: () => new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com/v1/d82ed08c584cd547c34157c5723417839b6d1253`),
            network_id: 80001,
            confirmations: 2,
            timeoutBlocks: 200,
            skipDryRun: true
        },
    },
    mocha: {
        // timeout: 100000
    },
    solc: {
        // Turns on the Solidity optimizer. For development the optimizer's
        // quite helpful, just remember to be careful, and potentially turn it
        // off, for live deployment and/or audit time. For more information,
        // see the Truffle 4.0.0 release notes.
        //
        // https://github.com/trufflesuite/truffle/releases/tag/v4.0.0
        optimizer: {
            enabled: true,
            runs: 200
        }
    }
}
