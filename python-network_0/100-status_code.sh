#!/bin/bash

# Check if the correct number of arguments is provided
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <URL> <filename>"
    exit 1
fi

# Assign arguments to variables
URL=$1
FILE=$2

# Check if the file exists
if [ ! -f "$FILE" ]; then
    echo "File not found!"
    exit 1
fi

# Send POST request with the file content and display the response body
response=$(curl -s -X POST -H "Content-Type: application/json" --data "@$FILE" "$URL")

# Display the response body
echo "$response"
