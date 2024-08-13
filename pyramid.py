def stack_height_2d(layers):
    if layers == 0:
        return 0
    if layers == 1:
        return 1
    else:
        return round((((layers - 1)* .866) + 1), 3)