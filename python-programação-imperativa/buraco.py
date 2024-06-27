def contaCon(x):
   contador = 0
   for i in x:
      if i in 'aAeEiIoOuU':
          contador += 0
      else:
         contador += 1
   return contador 

   
ac = ''
while True:
   p = input()
   if p != 'FIM':
      ac = ac +' '+ p
   if p == 'FIM':
      if ac == '':
         print('texto vazio')
      else: 
        pa =  ac.split()
        print(max(pa,key =contaCon))
      break
