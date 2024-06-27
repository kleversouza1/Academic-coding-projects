n = int(input())
m = int(input())

def mult(a,b):
    if b == 0:
        return 0
    elif b == 1:
        return a
    elif b  < 0:
        return - mult(a,-b)
    else:
        return a + mult(a,b-1)

print(mult(n,m))