def get_names(data):
    name_list = []
    for x in range(len(data)):
        name_list.append(data[x]['name'])
    return name_list