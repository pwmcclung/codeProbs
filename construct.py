def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        ran_lst = list(ransomNote)
        mag_lst = list(magazine)
        count = 0
        while len(ran_lst) > 0:
            checked_item = ran_lst.pop()
            if checked_item not in mag_lst:
                return False
                break
            else:
                removed = mag_lst.remove(checked_item)
                count += 1
        if len(ran_lst) == 0 and count == len(ransomNote) and len(magazine) >= 0:
            return True
        else:
            return False