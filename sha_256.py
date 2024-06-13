from hashlib import sha256
def to_sha256(s):
    hashed_string = sha256(s.encode('utf-8')).hexdigest()
    return hashed_string