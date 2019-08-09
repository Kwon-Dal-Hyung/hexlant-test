const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/7a3271db74c44386816f239bab695207');

async function getInfo () {
    const result = await web3.eth.net.getNetworkType();
    console.log(result);
}

getInfo();