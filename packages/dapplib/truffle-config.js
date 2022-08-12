require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember protect gloom narrow fold security'; 
let testAccounts = [
"0xc96f5ce59eb5e4f953e1ebb28f2bb00adafa9a2ac0b4cdd8a7b1fb6b792e35cf",
"0x1319e7e057c47b01fadb79747beaf0e8c273cf5ba5eea16366415f36098df032",
"0x031d8dfb54f6f4c465563f7e1e75259472456bb3ffe80b1795b8e3640b345b58",
"0xd744c9603d5e76ac6b82427c5e13ccb69b22f3cbadcfc188f09347850d7c74da",
"0xd85e491e0a3a1294c9b02fd521321c97536f6df4ae0477465a3f8519042f328d",
"0x455f8e38ce7a1aa809b7086c5546bc3956b37c8b29460639591c90cce8ff4e7d",
"0x0a5f006830790d5547079a49fd50adc4275836d007c2eeced9a97506b6969bca",
"0xce50eb42b8b3d4e3dbcfe3d58435d3978041911812d20efe08e9921732d440df",
"0x113c50f2034424ffca12dce025462e18ab20f51e78d66afe7311b08e355c6f96",
"0xc0b6214603e8cab528fc760bd106f38fbe06f3af0a83a03e72c7563dd1f5499e"
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

