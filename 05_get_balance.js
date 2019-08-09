
const Web3 = require('web3');

const web3 = new Web3('https://ropsten.infura.io/v3/7a3271db74c44386816f239bab695207');


async function getBalance(address) {

    const result = await web3.eth.getBalance(address);
    console.log(result)

    const weiToEther = web3.utils.fromWei(result, 'ether');
    console.log(weiToEther);
}


getBalance('0x711618dcbBaf8cb0bB1bC3bBC8bA9552dB31aC49');

// result : 2957209069100000000

