const MyContract = artifacts.require("MyContract");

module.exports = function(deployer) {
   deployer.deploy(MyContract, { gas: 5000000 })
};

