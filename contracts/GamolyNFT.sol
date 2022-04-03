pragma solidity ^0.8.3;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GamolyNFT is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _nftIds;
    address contractAddress;
    address admin;

    constructor(address _admin) ERC721("Gamoly nft", "GNFT"){
        admin = _admin;
    }

    function createNFT(address marketplaceAddress, string memory tokenURI) public returns(uint){
        require(msg.sender == admin, "Sender is not admin");
        contractAddress = marketplaceAddress;
        _nftIds.increment();
        uint256 newTokenId = _nftIds.current();

        _mint(admin, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        approve(contractAddress, newTokenId);
        return newTokenId;
    }

    function getLatestTokenId() public view returns (uint256){
        return _nftIds.current();
    }
}

