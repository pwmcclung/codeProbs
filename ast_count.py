def countAsterisks(self, s: str) -> int:
    ast_count = 0
    is_out = True
    for char in s:
        if char == '*':
            if is_out:
                ast_count += 1
        elif char == '|':
            is_out = not is_out
    return ast_count