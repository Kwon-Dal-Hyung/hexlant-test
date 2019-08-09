const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/7a3271db74c44386816f239bab695207');

async function getBlock(blockNumber, includeTxs = false) {
    const result = await web3.eth.getBlock(blockNumber, includeTxs);
    console.log(result)
}

// getBlock(6148951);
// include txs
getBlock(6148951, true);
