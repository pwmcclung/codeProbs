def are_equally_strong(your_left, your_right, friends_left, friends_right):
    if your_left == friends_left and your_right == friends_right:
        return True
    elif your_right == friends_left and your_left == friends_right:
        return True
    else:
        return False