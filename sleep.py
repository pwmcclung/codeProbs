import time as t
def make_me_slow():
    ## This function is too fast!
    t.sleep(7)
    for i in range(1000000):
        pass