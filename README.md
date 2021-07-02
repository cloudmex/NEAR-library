# `NEAR Library` Starter Kit

📄 Introduction
==================

NEAR Library is a smart contract where you can to create, rate, comment, store and transfer books using the NEAR protocol, making a library online where you can request one book and change the owner. The following are the main functionalities of this smart contract:

1. Add a Book to the library.
2. Get all the list of Books.
3. Get only the books that you added. 
4. Rate a book.
5. Add a comment where you describe why do you liked... or not.
6. Transfer the book to another Owner.

📦 Installation
================

To run this project locally you need to follow the next steps:

Step 1: Prerequisites
------------------------------

1. Make sure you've installed [Node.js] ≥ 12 (we recommend use [nvm])
2. Make sure you've installed yarn: `npm install -g yarn`
3. Install dependencies: `yarn install`
4. Create a test near account [NEAR test account]
5. Install the NEAR CLI globally: [near-cli] is a command line interface (CLI) for interacting with the NEAR blockchain

    yarn install --global near-cli

Step 2: Configure your NEAR CLI
-------------------------------

Configure your near-cli to authorize your test account recently created:

    near login

Step 3: Build and make a smart contract development deploy  
--------------------------------

Build the NEAR library smart contract code and deploy the local development server: `yarn build:release` (see `package.json` for a full list of `scripts` you can run with `yarn`). This script return to you a provisional smart contract deployed (save it to use later). You can also follow the instructions on the folder *scripts*.


📑 Exploring the NEAR library smart contract methods 
==================

The following commands allow you to interact with the smart contract methods using the NEAR CLI (for this you need to have a provisional smart contract deployed).

Information: the command for rate will require especific data (AccountId, Rate)
 
Rate values: 

    - The value 0 represents a bad rate.
    - The value 1 represents a regular rate.  
    - The value 2 represents a awesome rate.    


Command to add a book: 
--------------------------------------------

```bash
near call $CONTRACT AddBook '{"isbn": "string","name":"string","description":"string","numpage":"number","author":"string","datepublished":"date","editions":"number"}' --account-id <your test account>
```

Command to get all the books on the library:
--------------------------------------------

```bash
near view $CONTRACT getBooks
```

Command to get a specific book in the library:
--------------------------------------------

```bash
near view $CONTRACT getBook '{"id":int}'
```

Command to get the number of Books added:
--------------------------------------------

```bash
near view <your deployed contract> getNBooks
```

**Thing that we can add in the future**

Command to rate a book:
--------------------------------------------

```bash
 near call $CONTRACT rate '{"id":3,"valor":2}' --accountId joehank.testnet
```
Command to see the rates of a book:
--------------------------------------------

```bash
 near call $CONTRACT rate '{"id":3}' --accountId joehank.testnet
```

Command to comment a book:
--------------------------------------------

```bash
 near call $CONTRACT comment '{"id":3,"comment":"i love it"}' --accountId joehank.testnet
```
Command to see the rates of a book:
--------------------------------------------

```bash
 near call $CONTRACT getComments '{"id":3}' --accountId joehank.testnet
```

WireFraming
================

```bash
https://www.figma.com/file/I7oewIevwZP5LAAsPOUel0/Untitled?node-id=7%3A49
```