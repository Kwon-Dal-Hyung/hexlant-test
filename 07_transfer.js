const Web3 = require('web3');
const web3 = new Web3('https://ropsten.infura.io/v3/7a3271db74c44386816f239bab695207');

async function transfer(to, value) {
    let tx = {
        to,
        value,
        gas: 2000000
    };

    try {
        let account = await web3.eth.accounts.privateKeyToAccount('0xbe3dfb045bb17535c242aeb5964929fbf97653b1e53438dc735cec8141949ad2');
        console.log(account);
        const result = await account.signTransaction(tx);
        console.log(result);

            const txid = await web3.eth.sendSignedTransaction(result.rawTransaction);
            console.log(txid);
            
    } catch (e) {
        console.error(e);
    }
}

const amount = '0.1'
const etherToWei = web3.utils.toWei(amount);
//console.log(etherToWei);
transfer('0xeb81f7e39Ed31D0219b677f862329Aba984cDf82', etherToWei);
