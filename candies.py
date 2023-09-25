def candies_to_buy(amount_of_kids_invited):
    numCandies = 1
    while amount_of_kids_invited:
        candies = numCandies
        while numCandies % amount_of_kids_invited:
            numCandies += candies
        amount_of_kids_invited -= 1
    return numCandies
