// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract MyContract {
  string public message;

  constructor(string memory initMessage) {
    message = initMessage;
  }

  function updateMessage(string memory newMessage) public {
    message = newMessage;
  }
}

