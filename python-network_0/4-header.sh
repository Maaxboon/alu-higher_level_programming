#!/bin/bash
# sends GET request to given URL, with key-value, and displays body of response
curl -sG "$1" -H "X-School-User-Id: 98"
