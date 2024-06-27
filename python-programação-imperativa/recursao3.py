def parNat(n):
    if n == 0:
        return True
    else:
        return not parNat(n-1)
    
def par(n):
    if n >= 0:
        return parNat(n)
    else:
        return parNat(-n)
print(par(-5))