#!/usr/bin/python3
"""
This module defines a class Square with a private instance attribute size.
"""


class Square:
    """
    A class that defines a square by its size.
    """
    def __init__(self, size):
        """
        Initialize the square with a private instance attribute size.

        Args:
            size (int): The size of the square.
        """
        self.__size = size
