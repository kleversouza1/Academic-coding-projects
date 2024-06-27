{-dados tres numeros quantos numeros estao a cima da media-} 
acimaMedia :: Float -> Float -> Float -> Int
acimaMedia x y z
   | x == y && y == z            = 0
   | x > media && y > media   ||
     x > media && z > media   ||
	 y > media && z > media      = 2
   | outherwise                  = 1
   where 
     media = (x + y + z) / 3
   |















{-Dados três números, qual é o valor do meio (mediana)?-}
mediana :: Float -> Float -> Float








Dados dois números, definir uma função que retorne 1 se ambos são iguais. Caso contrário a função retorna 0.

Dados três inteiros, quantos são iguais?
Igual3 :: Float -> Float -> Float -> Int
Igual3 x y z
   | (x == y) && (y == z)             = 3
   | (x /= y) && (y /= z) && (x /= z) = 0
   | otherwise                        = 2


 
Dados três inteiros, quantos são únicos?
unicos :: Int -> Int -> Int -> Int
   | (x == y) && (y == z) = z         = 0
   | (x /= y) && (y /= z) = (z /= x)  = 3
   | otherwise                        = 1

{- outra soluçao-}
unicos2 x y z = 3 - iguais3 x y z 


{-Dados tres inteiros, quantos são parees-}
par :: Int -> Int -> Int -> Int
par x y z = parCar x + parCar y + parCar z
  where
     parCar a 
	    | even a    = 1 
		| otherwise = 0 


par 1 4 3 --------> parCar 1 + parCar 4 + parcar 3
          --------> 0 + 1 + 0 ----1


ifPar :: Int -> Int 
ifPar a
 |mod a 2 == 0 = 1
 |otherwise = 0 


quantosPar :: Int -> Int -> Int -> Int 
quantosPar a b c  = ifPar a + ifPar b + ifPar c

 





Dados quatro inteiros, quantos são parees
pares :: Float -> Float -> Float
pares a b c d
 
 
 
 
 {-colocar o r e l para associar qual executar primeiro-}
infixl 4 (+++)
(+++) :: Int -> Int -> Int
X +++ Y = if x > y then x else Y



(1 +++ 10) +++ 5


{- como funciona o numeoros de presedencia pag 13-}

a !! 2 + 5

{executar PRIMEIRO O !! FICA COMO (a !! 2) + 5}

x ^ 2 + 1  (x ^2 ) + 1


{-dados tres numeros quantos numeros estao a cima da media-} 

