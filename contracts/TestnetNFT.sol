// SPDX-License-Identifier: MIT
pragma solidity 0.6.6;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract TestnetNFT is ERC721 {
    uint256 public tokenCounter;
    constructor () public ERC721 ("MPATestNFT", "MPA"){
        tokenCounter = 0;
    }

    function createCollectible(string memory tokenURI) public returns (uint256) {
        uint256 newItemId = tokenCounter;
        _safeMint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        tokenCounter += 1;
        return newItemId;
    }
}