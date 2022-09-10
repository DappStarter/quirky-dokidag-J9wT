require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize frame street name rate sad honey good arctic slot genius'; 
let testAccounts = [
"0x94cac31d912a1a37c3772ccf1e1e079772b2f62bc9d3052c39b4fb77147dbc50",
"0xe1d1be193b465679400fb1b0960e1c9a65d9752fe9eb511ab0193391b7ab1386",
"0xe02d4e561c215a5962884330ff2158aef1d09f8d5f3f33bd98d64687df61f586",
"0x86f1b550f9feda5d3a289ed1b6e14bbdefbbde6b7a65c104838ae8012655eb5e",
"0x7ca35e730756d0430e1f5a52984113e6a0d4945e89224e6f09de97a2b0e629d0",
"0xab6a8d5af1a4848f7344c9541609a926c9336206af37d64d20b1969bac498347",
"0x7ac006bfddd20689c0c32a7053a04bdeb0c049ae843354ab9b608ff14e4088e2",
"0x439c03bb1621121fd70ce89c93b34033217b6e57cb4cdfd875303044f595f04f",
"0x3d7ae3c885c5d37e1fd26c6985a1e8965616718aa9dbcfcfcbdc49805cbf866c",
"0xe4112e3521ff7b0accf728b26f5aec6759ff3a74e8c816d6396630e0b97a480a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

