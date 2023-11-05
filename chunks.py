from math import ceil
def make_parts(arr, chunk_size):
    chunks = [ 
        arr[i * chunk_size:(i * chunk_size) + chunk_size]
        for i in range(ceil(len(arr) / chunk_size))]
    return chunks