def first_non_repeating_letter(s):
    chars = [x for x in s if s.lower().count(x.lower()) == 1]
    if len(chars) > 0:
        return chars[0]
    else:
        return ""