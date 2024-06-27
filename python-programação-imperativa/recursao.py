def fat(n):
    if n == 0:
        return 1
    else:
        return n *fat(n-1)


def fib(n):
    if n == 0 or n == 1:
        return n
    else : 
        return fib(n-1) + fib(n-2)

