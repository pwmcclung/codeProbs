def nonstop_hotspot(area):
    arr = area.split('#')
    for x in arr:
        if 'P' in x:
            return x.count('*')