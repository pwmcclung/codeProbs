def solve(a, b):
    # create variables to hold points
    alice_points = 0
    bob_points = 0
    # calculate points 
    if a[0] > b[0]:
        alice_points += 1
    elif a[0] < b[0]:
        bob_points += 1
    if a[1] > b[1]:
        alice_points += 1
    elif a[1] < b[1]:
        bob_points += 1
    if a[2] > b[2]:
        alice_points += 1
    elif a[2] < b[2]:
        bob_points += 1
    # compare points
    if alice_points == bob_points:
        return f'{alice_points}, {bob_points}: that looks like a "draw"! Rock on!'
    elif alice_points > bob_points:
        return f'{alice_points}, {bob_points}: Alice made "Kurt" proud!'
    elif alice_points < bob_points:
        return f'{alice_points}, {bob_points}: Bob made "Jeff" proud!'
        