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
Command to get all my complaints created:
--------------------------------------------

```bash
near call <your deployed contract> getNumberOfComplaints --accountId <your test account>
```

Command to get the number of complaints created:
--------------------------------------------

```bash
near view <your deployed contract> getNComplaints
```


Command to see a specific complaint information: 
--------------------------------------------

```bash
near view <your deployed contract> getComplaintInfo '{"id":integer (id from you complaint)}' --accountId <your test account>
```

Command to vote for a complaint: 
--------------------------------------------

```bash
near call <your deployed contract> voteComplaint '{"id":integer (id from you complaint)}' --accountId <your test account>
```

Command to remote a vote for a complaint that I made: 
--------------------------------------------

```bash
near call <your deployed contract> removeVote '{"id":integer (id from you complaint)}' --accountId <your test account>
```

Command to change the status (Submited to In progress) of a complaint if you are not the complaint owner (you need to be the solver of the complaint): 
--------------------------------------------

```bash
near call <your deployed contract> takeComplaint '{"id":integer (id from you complaint)}' --accountId <your test account>
```

Command to change the status (In progress to Done) of a complaint if you're the complaint owner: 
--------------------------------------------

```bash
near call <your deployed contract> finishComplaint '{"id":integer (id from you complaint)}' --accountId <your test account>
```

Command to change the status (Submited to In progress and In progress to Done) of a complaint if you're the complaint owner: 
--------------------------------------------

```bash
near call <your deployed contract> finishComplaint '{"id":integer (id from you complaint)}' --accountId <your test account>
```

### Singleton

We say that an AssemblyScript contract is written in the "singleton style" when the `index.ts` file (the contract entry point) has a single exported class (the name of the class doesn't matter) that is decorated with `@nearBindgen`.

In this case, all methods on the class become public contract methods unless marked `private`.  Also, all instance variables are stored as a serialized instance of the class under a special storage key named `STATE`.  AssemblyScript uses JSON for storage serialization (as opposed to Rust contracts which use a custom binary serialization format called borsh).

```ts
@nearBindgen
export class Contract {

  // return the string 'hello world'
  helloWorld(): string {}

  // read the given key from account (contract) storage
  read(key: string): string {}

  // write the given value at the given key to account (contract) storage
  @mutateState()
  write(key: string, value: string): string {}

  // private helper method used by read() and write() above
  private storageReport(): string {}
}
```


## The file system

```sh
├── README.md                          # this file
├── as-pect.config.js                  # configuration for as-pect (AssemblyScript unit testing)
├── asconfig.json                      # configuration for AssemblyScript compiler (supports multiple contracts)
├── package.json                       # NodeJS project manifest
├── scripts
│   ├── 1.dev-deploy.sh                # helper: build and deploy contracts
│   ├── 2.use-contract.sh              # helper: call methods on ContractPromise
│   ├── 3.cleanup.sh                   # helper: delete build and deploy artifacts
│   └── README.md                      # documentation for helper scripts
├── src
│   ├── as_types.d.ts                  # AssemblyScript headers for type hints
│   ├── simple                         # Contract 1: "Simple example"
│   │   ├── __tests__
│   │   │   ├── as-pect.d.ts           # as-pect unit testing headers for type hints
│   │   │   └── index.unit.spec.ts     # unit tests for contract 1
│   │   ├── asconfig.json              # configuration for AssemblyScript compiler (one per contract)
│   │   └── assembly
│   │       └── index.ts               # contract code for contract 1
│   ├── singleton                      # Contract 2: "Singleton-style example"
│   │   ├── __tests__
│   │   │   ├── as-pect.d.ts           # as-pect unit testing headers for type hints
│   │   │   └── index.unit.spec.ts     # unit tests for contract 2
│   │   ├── asconfig.json              # configuration for AssemblyScript compiler (one per contract)
│   │   └── assembly
│   │       └── index.ts               # contract code for contract 2
│   ├── tsconfig.json                  # Typescript configuration
│   └── utils.ts                       # common contract utility functions
└── yarn.lock                          # project manifest version lock

```
