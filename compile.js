const fs = require('fs');
const solc = require('solc');

// Get Path and Load Contract
const source = fs.readFileSync('IncrementerLog.sol', 'utf8');
console.log(source);
// Compile Contract
const input = {
   language: 'Solidity',
   sources: {
      'IncrementerLog.sol': {
         content: source,
      },
   },
   settings: {
      outputSelection: {
         '*': {
            '*': ['*'],
         },
      },
   },
};
const tempFile = JSON.parse(solc.compile(JSON.stringify(input)));
console.log(tempFile)
const contractFile = tempFile.contracts['IncrementerLog.sol']['IncrementerLog'];

// Export Contract Data
console.log(contractFile);
module.exports = contractFile;