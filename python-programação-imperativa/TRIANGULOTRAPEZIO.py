values = input()
conversionvalues= values.split ()
A = float(conversionvalues [0])
B = float(conversionvalues [1])
C = float(conversionvalues [2])

triangle  = (A*C)/2
circle1   = 3.14159*(C**2)
trapeze   = (A+B)*C / 2
square    = B**2
rectangle = A*B

print ('TRIANGULO:', '%.3f' % triangle)
print ('CIRCULO:'  , '%.3f' % circle1)
print ('TRAPEZIO:' , '%.3f' % trapeze)
print ('QUADRADO:' , '%.3f' % square)
print ('RETANGULO:', '%.3f' % rectangle)