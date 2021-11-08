const Web3 = require('web3');
const { abi } = require('./compile');

require('dotenv').config();
/*
   -- Define Provider & Variables --
*/
// Provider
const providerRPC = {
   development: 'http://localhost:9933',
   moonbase: 'https://rpc.testnet.moonbeam.network',
};
const web3 = new Web3(providerRPC.moonbase); //Change to correct network

// Variables
const contractAddress = '0xBDbb68F8F3efb46a183c853a427788CCD516B8C8';

/*
   -- Call Function --
*/
// Create Contract Instance
const counterContract = new web3.eth.Contract(abi, contractAddress);

const get = async () => {
    console.log(`Making a call to contract at address: ${contractAddress}`);

    // Call Contract
    const data = await counterContract.events.allEvents()
 
    console.log(data);
 };
 
 get();