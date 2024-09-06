def reverseOnlyLetters(self, s: str) -> str:
        # turn the string into a list
        s_list = list(s)
        #initialize two variables, one for the beginning of the list, one for the end (pointers)
        left, right = 0,len(s)-1
        #start a while loop that will go until the two pointers meet or pass each other
        while left < right:
            # move the left index forward if the current element is not a letter
            while left < right and not s_list[left].isalpha():
                left += 1
            # move the right index backwards if the current element is not a letter
            while left < right and not s_list[right].isalpha():
                right -= 1
            # if both th current characters are letters, swap them
            if left < right:
                s_list[left], s_list[right]  = s_list[right], s_list[left]
                # move both pointers
                left, right = left + 1, right - 1
        #join and return the new string
        return ''.join(s_list)