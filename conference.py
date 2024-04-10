def conference_picker(cities_visited, cities_offered):
    new_arr = [x for x in cities_offered if x not in cities_visited]
    if len(new_arr) > 0:
        return new_arr[0]
    else:
        return 'No worthwhile conferences this year!'