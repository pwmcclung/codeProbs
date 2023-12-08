def will_you(young, beautiful, loved):
    #return True conditions
    if (young == False and beautiful == False and loved == True) or \
       (young == False and beautiful == True and loved == True) or \
       (young == True and beautiful == False and loved == True) or \
       (young == True and beautiful == True and loved == False):
        return True
#     if young == False and beautiful == False and loved == True:
#         return True
#     if young == False and beautiful == True and loved == True:
#         return True
#     if young == True and beautiful == False and loved == True:
#         return True
#     if young == True and beautiful == True and loved == False:
#         return True
      #return False conditions
    if (young == True and beautiful == True and loved == True) or \
       (young == False and beautiful == False and loved == False) or \
       (young == True and beautiful == False and loved == False) or \
       (young == False and beautiful == True and loved == False):
        return False
#     if young == True and beautiful == True and loved == True:
#         return False
#     if young == False and beautiful == False and loved == False:
#         return False
#     if young == True and beautiful == False and loved == False:
#         return False
#     if young == False and beautiful == True and loved == False:
#         return False