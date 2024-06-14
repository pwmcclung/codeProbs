def detectCapitalUse(self, word: str) -> bool:
    word_arr = list(word)
    copy_arr = list(word.lower()).copy()
    copy_arr_upper = list(word.upper()).copy()
    if copy_arr == word_arr:
        return True
    elif word == word.capitalize():
        return True
    elif word_arr == copy_arr_upper:
        return True
    elif word_arr != copy_arr_upper:
        return False