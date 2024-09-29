# this is from LeetCode. Problem # 1979, 
# find the greatest common divisor in an array of numbers
# P: the parameters of the problem is a list of numbers
# R:  your job is to return the greatest common divisor of the smallest and largest
# numbers in the list.
# Pseudocode:
#    sort the list
#    find the smallest[index = 0] and largest [index -1] values
#    create a helper function to caluculate the gcd:
#           def gcd(a,b):
#              if b == 0:
#                  return a
#              else:
#                  return gcd(b, a % b)
#    once you have the sorted list, the smallest and largest values, and the gcd function
#    you can solve the problem
# E: you get the following list =>[2,5,6,9,10] 
# you can see that 2 and 10 are the smallest and largest values, 2 is the gcd
# the working function in python 3
class Solution:
    def findGCD(self, nums: List[int]) -> int:
        newNums = sorted(nums)
        smallest = newNums[0]
        largest = newNums[-1]
        return gcd(largest, smallest)
        
    def gcd(a,b):
        if b == 0:
            return a
        else:
            return gcd(b, a % b)