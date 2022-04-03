pragma solidity ^0.8.3;
pragma experimental ABIEncoderV2;
// SPDX-License-Identifier: MIT
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Gamoly is ReentrancyGuard {
    using Counters for Counters.Counter;

    mapping(address => User) public users;
    mapping(uint256 => User) idToUser;
    mapping(address => User) public followers;
    mapping(address => User) public following;
    mapping(address => NFT) totalNFT;
    mapping(uint256 => NFT) idToNFT;
    address payable admin;
    Counters.Counter private _nftId;
    Counters.Counter private _userCount;
    Counters.Counter private _itemsSold;

    constructor(address payable _admin) public {
        admin = _admin;
    }

    event UserPrint(string _name);

    struct User {
        Stream stream;
        string name;
        string avatar;
        address addr;
        uint256 index;
    }

    struct Stream {
        string url;
        string title;
        string description;
        string category;
        bool isActive;
    }

    function get(address _address) public view returns (User memory user) {
        return users[_address];
    }

    function set(User memory _user) public {
        _userCount.increment();
        _user.index = _userCount.current();
        users[msg.sender] = _user;
        idToUser[_user.index] = _user;
    }

    function setStream(uint256 index, Stream memory _stream) public {
        users[msg.sender].stream = _stream;
        idToUser[index].stream = _stream;
    }

    function getLiveUsers() public view returns (User[] memory user) {
        uint256 totalItemCount = _userCount.current();
        uint256 itemCount = 0;
        uint256 currentIndex = 0;

        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToUser[i + 1].stream.isActive == true) {
                itemCount += 1;
            }
        }

        User[] memory liveUsers = new User[](itemCount);
        for (uint256 i = 0; i < totalItemCount; i++) {
            if (idToUser[i + 1].stream.isActive == true) {
                liveUsers[currentIndex] = idToUser[i + 1];
                currentIndex += 1;
            }
        }
        return liveUsers;
    }

    //----Market place contract

    NFT[] public NFTlist;

    event MarketItemCreated(
        uint256 indexed itemId,
        address indexed nftContract,
        uint256 indexed nftId,
        address seller,
        address admin,
        uint256 price
    );

    uint256 public nftCount;

    struct NFT {
        uint256 itemId;
        address nftContract;
        uint256 tokenId;
        address payable seller;
        address payable admin;
        uint256 price;
    }

    event Message(address from, uint256 tokenId);

    function createNFT(
        string memory name,
        string memory description,
        address nftContract,
        uint256 nftId,
        uint256 price
    ) public payable nonReentrant {
        require(msg.sender == admin, "Sender is not admin");
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
        return idToNFT[itemId];
    }

    //    function sellNFT()

    function getNFT(address _admin) public view returns (NFT memory nft) {
        return totalNFT[_admin];
    }
}
