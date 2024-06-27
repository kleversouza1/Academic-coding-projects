{-type Nome = String
type Idade = Int
type Altura = Float
type Pessoa = (Nome, (Idade, Altura))

nome :: Pessoa -> Nome
nome pes = fst pes  

idade :: Pessoa -> Idade
idade pes = fst (snd pes)

altura :: Pessoa -> Altura
altura pes = snd (snd pes)-}

--- dado dois numeros inteiros diga o maximo e quantas vezes ele se repete
maxOcorre :: Int -> Int -> (Int, Int)
maxOcorre x y
    | y == x = (x,y)
    |otherwise = (max x y, 1)

somar :: Int -> Int -> Int
somar x y = x + y    