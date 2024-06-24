def determine_winner(board):
    flatList = [element for innerList in board for element in innerList]
    bCount = 0
    wCount = 0
    for x in flatList:
        if x == "B":
            bCount += 1
        elif x == "W":
            wCount += 1
    if bCount > wCount:
        return ('B', bCount)
    elif wCount > bCount:
        return ('W', wCount)
    else:
        return ('T', wCount)