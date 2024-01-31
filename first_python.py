def get_first_python(users):
    new_arr = []
    for x in range(len(users)):
        if users[x]['language'] == 'Python':
            new_arr.append(users[x])
    first_name = ''
    country = ''
    if len(new_arr) > 0:
        first_name = new_arr[0]['first_name']
        country = new_arr[0]['country']
        return '{}, {}'.format(first_name, country)
    else:
        return 'There will be no Python developers'