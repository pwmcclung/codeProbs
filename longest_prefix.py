def longestCommonPrefix(self, strs: List[str]) -> str:
    # sort the array of strings in alphabetical order
    ## compare the characters in the first and last strings of the array
    ### if they are the same, append the char to the result
    #### else, stop the comparison, the result contains the longest common prefix
    prefix = []
    sort_str = sorted(strs)
    if sort_str and len(strs) > 0:
        first = sort_str[0]
        last = sort_str[-1]
        for i in range(len(first)):
            if len(last) > i and last[i] == first[i]:
                prefix.append(last[i])
            else:
                return ''.join(prefix)
        return ''.join(prefix)