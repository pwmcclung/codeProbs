from collections import Counter
import functools
def commonChars(self, words: List[str]) -> List[str]:
    return list(functools.reduce(lambda a,b: a&b, [Counter(c) for c in words]).elements())