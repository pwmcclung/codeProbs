def mutate_my_strings(s1,s2):
    string_one = list(s1)
    string_two = list(s2)
    mutated_strings = [''.join(string_one)]
    for x in range(len(string_one)):
        if string_one[x] != string_two[x]:
            string_one[x] = string_two[x]
            mutated_strings.append(''.join(string_one))
    return '\n'.join(mutated_strings)+'\n'