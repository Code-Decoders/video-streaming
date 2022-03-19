const SimpleStorage = artifacts.require('./SimpleStorage.sol')
// const mystream = artifacts.require('./MyStream.sol')

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage)
  // deployer.deploy(mystream)
}
