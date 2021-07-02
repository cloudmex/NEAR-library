#!/usr/bin/env bash

# exit on first error after this point to avoid redeploying with successful build
set -e

echo
echo ---------------------------------------------------------
echo "Step 1: Build the contract (may take a few seconds)"
echo ---------------------------------------------------------
echo

yarn build:release

echo
echo
echo ---------------------------------------------------------
echo "Step 2: Deploy the contract"
echo
echo "(edit scripts/1.dev-deploy.sh to deploy other contract)"
echo ---------------------------------------------------------
echo

# comment out the line below to deploy the other example contract
near dev-deploy ./build/release/library.wasm

# uncomment the line below to deploy the other example contract
# near dev-deploy ./build/release/singleton.wasm

echo
echo
echo ---------------------------------------------------------
echo "Step 3: Prepare your environment for next steps"
echo
echo "(a) find the contract (account) name in the message above"
echo "    it will look like this: [ Account id: dev-###-### ]"
echo
echo "(b) set an environment variable using this account name"
echo "    see example below (this may not work on Windows)"
echo
echo ---------------------------------------------------------
echo 'export CONTRACT=<dev-123-456>'
# uncomment this line for a useful hint when using the singleton style
# echo "near call \$CONTRACT init --accountId \$CONTRACT"
echo ---------------------------------------------------------
echo

exit 0



  near call $CONTRACT AddBook '{"isbn":"978-607-14-1124-2",
        "name":"Veinte mi leguas de viaje submarino2",
        "description":"la infortunada expedision a méxico y la victoria de prusia ...",
        "numpage":"176",
        "author":"Julio Verne",
        "datepublished":"marzo del 2013",
        "editions":"1"}' --account-id dokxo.testnet