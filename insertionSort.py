# def insertion_sort(array):
#     for index in range(1, len(array)):

#         temp_value = array[index] 
#         position = index - 1

#         while position >= 0:
#             if array[position] > temp_value:
#                 array[position + 1] = array[position]
#                 position = position - 1
#             else:
#                 break
#         array[position + 1] = temp_value
#     return array
# def insertion_sort(array):
#     # first we start a loop, beginning at index one,
#     #  that runs through the entire array, each round is a pass through
#     for index in range(1, len(array)):
#         # within each pass through, we save the value in a variable
#         temp_value = array[index]
#         #next we create a variable called position, 
#         # it will start immediately to the left of the index of temp value
#         # as we move through, this position will keep moveing leftward
#         position = index -1
#         # We then begin an inner while loop, which runs as long as position
#         # is greater or equal to zero
#         while position >= 0:
#             # We then perform  our comparision. we check whether the 
#             # value at position is greater thatn temp value
#             if array[position] > temp_value:
#                 ## if so, we shift that left value to the right
#                 array[position + 1] = array[position]
#                 # WE decrement the position by one, compare the left value
#                 # against the temp value
#                 position = position - 1
#             else:
#                 #if we encounter a value that greater than, we break 
#                 # and end the pass through, since it's time to move
#                 # the temp to the gap
#                 break
#         # this line moves the temp to the gap
#         array[position + 1] = temp_value
#     # after all passthroughs we return the array 
#     return array
def insertion_sort(array):
    for index in range(1, len(array)):
        temp_value = array[index]
        position = index - 1
        while position >= 0:
            if array[position] > temp_value:
                array[position + 1] = array[position]
                position = position - 1
            else:
                break
        array[position + 1 ] = temp_value
    return array