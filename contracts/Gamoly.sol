
pragma solidity ^0.8.3;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GamolyStorage is ERC721URIStorage{

    using Counters for Counters.Counter;
    Counters.Counter private _nftIds;
    address contractAddress;
    address owner;

    constructor(address _owner) ERC721("Gamoly nft", "GNFT"){
        owner = _owner;
    }

    function createNFT(address marketplaceAddress, string memory tokenURI) public returns(uint){
        contractAddress = marketplaceAddress;
        _nftIds.increment();
        uint256 newTokenId = _nftIds.current();

        _mint(owner, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        approve(contractAddress, newTokenId);

        return newTokenId;
    }

    function getLatestTokenId() public view returns (uint256){
        return _nftIds.current();
    }
}

contract Gamoly is ReentrancyGuard {
    using Counters for Counters.Counter;

    mapping(address => User) public users;
    mapping(address => User) public followers;
    mapping(address => User) public following;
    mapping(address => NFT) totalNFT;
    mapping(uint256 => NFT) idToNFT;
    address payable owner;
    Counters.Counter private _nftId;
    Counters.Counter private _itemsSold;

    constructor (address payable _owner) public {
        owner = _owner;
    }


    struct User {
        Stream stream;
        string name;
        string avatar;
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

     event MarketItemCreated (
    uint indexed itemId,
    address indexed nftContract,
    uint256 indexed nftId,
    address seller,
    address owner,
    uint256 price
  );


    uint256 public nftCount;


    struct NFT{
    uint itemId;
    address nftContract;
    uint256 tokenId;
    address payable seller;
    address payable owner;
    uint256 price;
    }


    event Message (
          address from,
          uint256 tokenId
      );

    function createNFT(string name, string description, address nftContract, uint256 nftId, uint256 price)public payable nonReentrant  {
        require(price > 0, "Price should be atleast 1 !");

        emit Message(msg.sender, nftId);

        _nftId.increment();
        uint256 itemId = _nftId.current();

        IERC721(nftContract).transferFrom(msg.sender, address(this), nftId);

        idToNFT[itemId] = NFT(
            itemId,
            nftContract,
            nftId,
            payable(msg.sender),
            payable(address(0)),
            price
        );
    }

    function sellNFT()

    function getNFT(address _owner) public view returns(NFT memory nft){
        return totalNFT[_owner];
    }

}

