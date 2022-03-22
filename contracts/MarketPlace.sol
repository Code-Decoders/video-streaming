pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract Marketplace{

    NFT[] public NFTlist;

    mapping(address => NFT) totalNFT;

    struct NFT{
        string name;
        string description;
        string url;
        uint256 price;
        address owner;
    }


    // function getOwner(address add) public view returns(NFT memory nft){
    //     return owners[add];
    // }

    function createNFT(string memory _name, string memory _description, string memory _url, uint256 _price, address _owner) public returns (NFT memory nft) {
        NFTlist.push(NFT(_name, _description, _url, _price, _owner));
        NFT memory newNFT = NFTlist[NFTlist.length - 1];
        totalNFT[_owner] = newNFT;
        return newNFT;
    }

    function getNFT(address _owner) public view returns(NFT memory nft){
        return totalNFT[_owner];
    }



}
