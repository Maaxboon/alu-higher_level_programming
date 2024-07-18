#!/usr/bin/python3
"""
This script adds all arguments to a Python list and saves them to a file.

- It uses the functions save_to_json_file from 5-save_to_json_file.py
  and load_from_json_file from 6-load_from_json_file.py.
- The list is saved as a JSON representation in a file named add_item.json.
- If the file doesn’t exist, it is created.
"""

import sys

# Import the necessary functions
save_to_json_file = __import__('5-save_to_json_file').save_to_json_file
load_from_json_file = __import__('6-load_from_json_file').load_from_json_file

# Define the filename
filename = "add_item.json"

# Load the existing content of the file, or create a new list if the file doesn't exist
try:
    items = load_from_json_file(filename)
except FileNotFoundError:
    items = []

# Add all command line arguments to the list (excluding the script name)
items.extend(sys.argv[1:])

# Save the updated list back to the file
save_to_json_file(items, filename)
