def matrix_addition(a, b):
    ans_array = a.copy()
    for i in range(len(a)):
        for j in range(len(a[0])):
            ans_array[i][j] = a[i][j] + b[i][j]
    return ans_array