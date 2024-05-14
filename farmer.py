def get_animals_count(legs_number, heads_number, horns_number):
    cows = horns_number // 2
    cows_legs = cows * 4
    legs = legs_number - cows_legs
    heads = heads_number - cows
    chickens = (4 * heads - legs) // 2
    rabbits = heads - chickens
    ani_dict = {'rabbits': rabbits, 'chickens': chickens, 'cows': cows}
    return ani_dict