def repeatedCharacter(self, s: str) -> str:
    mask = 0
    for char in s:
        a_pos = ord(char) - ord('a')
        if mask & (1 << a_pos):
            return char
        mask |= 1 << a_pos