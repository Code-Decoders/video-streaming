const Gamoly = artifacts.require('Gamoly')
const GamolyNFT = artifacts.require('GamolyNFT')

module.exports = function (deployer) {
  deployer.deploy(Gamoly, "0xA9605c1819BF88140b0B8C6DBaC52A71746E3dB2")
}
