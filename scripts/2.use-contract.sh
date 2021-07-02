#!/usr/bin/env bash

#
set -e

echo
echo
echo ---------------------------------------------------------
echo "Step 0: Call the function on the contract to Add a Book"
echo
echo "(run this script again to see changes made by this file)"
echo ---------------------------------------------------------
echo

near call $CONTRACT AddBook '{"isbn": "string","name":"string","description":"string","numpage":"number","author":"string","datepublished":"date","editions":"number"}' --account-id <your test account>

echo
echo
echo --------------------------------------------------------------------
echo "Step 1: Call the functions on the contract"
echo --------------------------------------------------------------------
echo

near view $CONTRACT getBooks

echo
exit 0
