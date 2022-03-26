pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract Gamoly is ERC721URIStorage{

    mapping(address => User) public users;
    mapping(address => User) public followers;
    mapping(address => User) public following;
    mapping(uint256 => NFT) public 

    struct User {
        Stream stream;
        string name;
        string avatar;
    }

    constructor() ERC721("NFT", "NFT"){

    }

    struct Stream {
        string url;
        string title;
        string description;
        bool isActive;
    }

    function get(address _addr) public view returns (User memory user) {
        // Mapping always returns a value.
        // If the value was never set, it will return the default value.
        return users[_addr];
    }

    function set(address _addr, User memory _user) public {
        // Update the value at this address
        users[_addr] = _user;
    }


    //----Market place contract

    NFT[] public NFTlist;

    mapping(address => NFT) totalNFT;

    uint256 public nftCount;


    struct NFT{
        string name;
        string description;
        string url;
        uint256 price;
        address owner;
        uint256 nftAddress;
    }


    function buyNFT(string memory nftAddress) public returns(NFT memory nft){
    }

    function createNFT(string memory _name, string memory _description, string memory _url, uint256 _price, address _owner) public returns (NFT memory nft) {
        nftCount += 1;
        NFTlist.push(NFT(_name, _description, _url, _price, _owner, nftCount));
        NFT memory newNFT = NFTlist[NFTlist.length - 1];
        totalNFT[_owner] = newNFT;
        return newNFT;
    }

    function getNFT(address _owner) public view returns(NFT memory nft){
        return totalNFT[_owner];
    }

}
