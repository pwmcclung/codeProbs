from preloaded import CARS

def find_misfire(string):
    car = string.split(' ')
    mis_fire = car[2].split('-')
    brand = car[0]
    car_cyls = CARS[brand][car[1]].split('-')
    missing = [ x for x in car_cyls if x not in mis_fire]
    return '-'.join(missing)