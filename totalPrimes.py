def get_total_primes(lowerBound, upperBound):
    sieveOfEratosthenes = [True] * int((upperBound / 2))
    for i in range(3, int(upperBound ** 0.5) + 1, 2):
        if sieveOfEratosthenes[int(i / 2)]:
            sieveOfEratosthenes[int(i * i / 2)::i] = [False] * (int((upperBound - i * i - 1) / (2 * i)) + 1)
    primesBetweenAandB = [2] + [2 * i + 1 for i in range(1, int(upperBound / 2)) if sieveOfEratosthenes[i] and (2 * i + 1) >= lowerBound]
    if lowerBound > 2:
        answer = len(primesBetweenAandB) - 1
    else:
        answer = len(primesBetweenAandB)
    primeSingleDigits = ['2', '3', '5', '7']
    for x in primesBetweenAandB:
        for y in str(x):
            if y not in primeSingleDigits:
                answer = answer - 1
                break

    return answer