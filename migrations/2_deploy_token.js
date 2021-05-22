const MyToken = artifacts.require('MyToken');
module.exports = function (deployer) {
  deployer.deploy(MyToken, 'Test123', 'TTT12');
};
