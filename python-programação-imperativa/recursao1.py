def fat(n):
    if n == 0:
        return 1
    else:
        return n *fat(n-1)

def pot(x,n):
    if n == 0:
        return 1
    else:
        return x * pot(x,n-1)

## euler

def eAprox(n):
    if n == 0:
        return 1
    else:
        return 1/fat(n) + eAprox(n-1)
       
print(eAprox(5))