import hashlib
def pass_hash(str):
    result =  hashlib.md5(str.encode())
    return result.hexdigest()