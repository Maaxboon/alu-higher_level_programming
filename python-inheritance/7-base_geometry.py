#!/usr/bin/python3
"""Module for BaseGeometry class"""


class BaseGeometry():
    """class BaseGeometry with 2 methods"""
    pass

    def area(self):
        """area is not implemented"""
        raise Exception("area() is not implemented")

    def integer_validator(self, name, value):
        """pub Inst method to validate value"""
        if type(value) != int:
            raise TypeError("{} must be an integer".format(name))
        if type(value) == int:
            if value <= 0:
                raise ValueError("{} must be greater than 0".format(name))
