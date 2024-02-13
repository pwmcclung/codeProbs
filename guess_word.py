def count_correct_characters(correct, guess):
    if len(correct) != len(guess):
        raise Exception('Lengths should be equal!')
    else:
        count = 0
        for x in range(len(correct)):
            if correct[x] == guess[x]:
                count += 1
        return count