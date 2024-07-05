#!/usr/bin/python3
class BaseGeometry:
    """Base Geometry class"""
    
    def area(self):
        """Not implemented"""
        raise Exception("area() is not implemented")
    
    def integer_validator(self, name, value):
        """Validates that value is an integer greater than 0"""
        if type(value) is not int:
            raise TypeError(f"{name} must be an integer")
        if value <= 0:
            raise ValueError(f"{name} must be greater than 0")
