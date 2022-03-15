pragma solidity ^0.5.16;
pragma experimental ABIEncoderV2;

contract MyStream {
    mapping(address => User) public users;
    mapping(address => User) public followers;
    mapping(address => User) public following;

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

    //    Stream[] public streamList;
    //
    //    function create(string memory _title, string memory _description) public {
    //        streamList.push(Stream(_title, _description));
    //    }
    //
    //    // Solidity automatically created a getter for 'todos' so
    //    // you don't actually need this function.
    //    function get(uint _index) public view returns (string memory title, string memory description) {
    //        Stream storage stream = streamList[_index];
    //        return (stream.title, stream.description);
    //    }
    //
    //    // update title and description
    //    function update(uint _index, string memory _title, string memory _description) public {
    //        Stream storage stream = streamList[_index];
    //        stream.title = _title;
    //        stream.description = _description;
    //    }

}
