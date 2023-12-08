def sort_cards(cards):
    """Sort shuffled list of cards, sorted by rank.
    
    >>> sort_cards(['3', '9', 'A', '5', 'T', '8', '2', '4', 'Q', '7', 'J', '6', 'K'])
    ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
    
    """
    cards_val = {'A':1, '2':2, '3':3, '4':4, '5':5, '6':6, '7':7,'8':8,'9':9, 'T':10, 'J':11, 'Q':12, 'K':13}
    result = sorted(cards, key = cards_val.get)
    return result