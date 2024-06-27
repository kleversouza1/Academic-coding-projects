kwh = input()
conversioninput = kwh.split ()

energy = float(conversioninput[0])

price  = float(conversioninput[1])

valuewater = (energy *1000* price)
print('%.2f' % valuewater)

sewer = valuewater * 80 / 100
print ('%.2f' % sewer)

allPrice = ( sewer + valuewater)
print('%.2f' % allPrice)