def best_friend(txt, a, b):
    if txt.count(a) == txt.count(a+b):
        return True
    else:
        return False