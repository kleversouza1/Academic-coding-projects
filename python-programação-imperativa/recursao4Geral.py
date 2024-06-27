def par(n):
    if n == 0:
        return True
    elif n == 1:
        return False
    else:
        return par(n-2)

print(par(5))

def produtoDeAte(m,n):
    if m > n:
        return 1
    else:
        return produtoDeAte(m,n-1)*n

print(produtoDeAte(5,5))



#####