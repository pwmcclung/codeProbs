def generator (_from, _to, _step):
    if _step <= 0:
        return []
    else:
        new_arr = []
        if _to < _from:
            while _to <= _from:
                new_arr.append(_from)
                _from -= _step
        else:
            while _from <= _to:
                new_arr.append(_from)
                _from += _step
        return new_arr