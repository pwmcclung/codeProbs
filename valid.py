def score31(c1, c2, c3):
    card_list = [c1,c2,c3]
    card_suit = {'H': 0, 'S':0, 'C':0, 'D':0}
    face_cards = {'K':10, 'J':10, 'A':11, 'Q':10}
    cardSet = set(c[-1] for c in card_list)
    if len(cardSet) == 1:
        if cardSet == {'A'}:
            return 32
        else:
            return 30.5
    for card in card_list:
        val = card[1:]
        if val in face_cards:
            card_suit[card[0]] += face_cards[val]
        else:
            card_suit[card[0]] += int(val)
    return max(card_suit.values())
        