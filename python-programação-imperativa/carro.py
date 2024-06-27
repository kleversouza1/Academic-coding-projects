days=int(input())
kms=int(input())

cota=100
diaria=90
  
if kms<=cota:
   taxa=0
   print ("%.2f" %((days*diaria)+taxa))
else:
    taxa=(kms-(cota*days))*12
    print("%.2f" %((days*diaria)+taxa))