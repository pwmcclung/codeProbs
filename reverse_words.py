def reverse(st):
    arr = st.split(' ')
    new_list = []
    for x in arr:
        new_list.insert(0,x)
    return ' '.join(new_list)