// https://www.youtube.com/watch?v=L6X7BqRZ96s

let hash = require('object-hash');

class BlockChain {

    constructor () {
        //Create
        this.chain = [];
        //Transaction
        this.curr_transactions = [];
    }

    addNewBlock(prevHash) {
        let block ={
            index: this.chain.length + 1,
            timestamp: Date.now(),
            transactions: this.curr_transactions,
            hash: null,
            prevHash: prevHash,
        }
        
        //Put hash
        this.hash = hash(block);

        //Add to Chain
        this.chain.push(block);
        this.curr_transactions = [];
        return block;
    }

    addNewTransaction(sender, recepient, amount) {
        this.curr_transactions.push({ sender, recepient, amount })
    }

    lastBlock() {
        return this.chain.slice(-1)[0];
    }

    isEmpty() {
        return this.chain.length == 0;
    }
}

module.exports = BlockChain;