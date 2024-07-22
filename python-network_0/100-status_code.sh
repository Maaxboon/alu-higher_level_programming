#!/bin/bash
# Sends a request to a URL and displays only the status code
curl -w "%{http_code}\n" -o /dev/null -s "$1"
