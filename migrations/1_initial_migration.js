const Migrations = artifacts.require('Migrations');
const MyToken = artifacts.require('MyToken');
module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(MyToken);
};
