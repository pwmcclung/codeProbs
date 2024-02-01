def is_ruby_coming(lst): 
    for x in range(len(lst)):
        if 'Ruby' in lst[x]['language']:
            return True
    return False