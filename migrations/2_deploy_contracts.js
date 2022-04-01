const Gamoly = artifacts.require('Gamoly')
const GamolyNFT = artifacts.require('GamolyNFT')

module.exports = function (deployer) {
  deployer.deploy(Gamoly, "0xc607ba29520Cb0E2cAD69F61018A0e700b5CfCCC")
}
