A = float(input())
B = float(input())

P1 = B / 100
P2 = A * B / 100 + A
print ('Seu salario teve aumento de','%.1f' % B,'%, passando de R$','%.1f' % A, 'para R$','%.1f' % P2)