letter = input()
N1 = int(input())
N2 = int(input())
N3 = int(input())

arithmetic = (N1+N2+N3)/3
harmonic   = 3 / (1/N1 + 1/N2 + 1/N3)
geometric  = (N1*N2*N3)**(1/3)

if letter == 'G':
    print('%.3f' % geometric)
if letter == 'H':
    print('%.3f' % harmonic)
if letter == 'A':
    print( '%.3f' % arithmetic)