def vowelStrings(self, words: List[str], left: int, right: int) -> int:
        count = 0
        vowels = ['a', 'e', 'i', 'o', 'u']
        while left <= right:
            if words[left][0] in vowels and words[left][-1] in vowels:
                count += 1
            left += 1
        return count