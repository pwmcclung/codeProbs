def mine_location(field):
    for i,x in enumerate(field):
        if 1 in x:
            return [i, x.index(1)]