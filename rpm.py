"""
Pseudocode:
The algororithm accepts two integers, x and y. The goal is to multiply both integers without 
using multiplication. 
The steps are:
initialize an answer, set to value of zero
use a while loop to iterate while y is greater than zero
if y is odd, add x to result
we then add x to the value of x
using the math.floor function to get the integer portion, we divide y by 2
we then return the result at the end of the while loop
"""


import math
def russian_peasant_multiplication(x, y):
    result = 0
    while y > 0:
        if y % 2 != 0:
            result += x
        x = x + x
        y = math.floor( y /2)
    return result
