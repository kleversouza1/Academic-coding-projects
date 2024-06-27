def indiceMenor(a):
    m = 0
    for i in range(1,len(a)):
        if a[i] < a[m]:
            m = i
    return m
print(indiceMenor([2,4,1,9,0,10]))
#####W##############
def mapear(f,a):
    for i in range(len(a)):
        a[i]= f(a[i])
xs = ['1','2','3']
mapear(int,xs)
################

