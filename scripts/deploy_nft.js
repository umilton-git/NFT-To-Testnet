// Contract
const TestnetNFT = artifacts.require("../build/TestnetNFT")

module.exports = async function(callback) {
    try {
      // Fetch accounts from wallet

      const test_uri = "https://minorityprogrammers.com/assets/images/mp_gradient_rock.svg"
      const accounts = await web3.eth.getAccounts()
  
      // Fetch the deployed NFT contract
      console.log("Deploying the NFT Contract")
      const NFT = await TestnetNFT.deployed()
      console.log('NFT Contract Address:', NFT.address)
  
      // Setup the owner
      const owner = accounts[0]
      console.log("Owner account: ", owner)

      // Create an NFT
      console.log("Creating an NFT")
      const NFTCounter = await NFT.tokenCounter()
      console.log("NFT Counter: ", NFTCounter.toString())
      const transaction = await NFT.createCollectible(test_uri, { from: owner })
      console.log("NFT minted to owner")
      const NFTOwner = await NFT.ownerOf(0)
      console.log("NFT Owner: ", NFTOwner)
      const NFTURI = await NFT.tokenURI(0)
      console.log("NFT URI: ", NFTURI)
    }
  
    catch(error) {
      console.log(error)
    }
  
    callback()
  }
  