const TestnetNFT = artifacts.require("TestnetNFT")

module.exports = async function(deployer){
    await deployer.deploy(TestnetNFT)
}