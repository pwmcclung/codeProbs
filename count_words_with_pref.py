def prefixCount(self, words: List[str], pref: str) -> int:
    count = 0
    length = len(pref)
    for x in range(len(words)):
        slice_word = words[x][0:length]
        if slice_word == pref:
            count += 1
    return count