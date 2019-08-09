const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/7a3271db74c44386816f239bab695207');

async function generateAddress() {
    try {
        const result = await web3.eth.accounts.create();
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

generateAddress();

