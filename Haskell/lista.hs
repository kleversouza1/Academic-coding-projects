type CadastroSUS = [Cidadao]
type CPF         = Integer
type Nome        = String
type Genero      = Char
type Dia         = Int
type Mes         = Int
type Ano         = Int
type Data        = (Dia , Mes , Ano)
type DataNasc    = Data
type Endereco    = String
type Municipio   = String
type Estado      = String
type Telefone    = String
type Email       = String
type Cidadao     = (CPF, Nome, Genero, DataNasc, Endereco, Municipio, Estado, Telefone, Email)

----todos os cadrastros estao nessa função

cadastroPrincipal :: CadastroSUS
cadastroPrincipal =
    
  [   (25675889555, "Tiao silva", 'M', (10,11,1995),"Rua B, 205", "Estancia","SE", "998765555", "tiaosilva@gmail.com"),

      (58681589555, "Maria Souza",'F', (30,05,1998),"Rua C, 129","Aracaju", "SE", "998796150", "mariasouza@gmail.com"), 
       
      (54805874562, "pablo pereira", 'M', (05,12,1996),"Rua A, 175", "Araua","SE", "999999999", " pablo@gmail.com"), 
      
      (99845652522, "Sheyla", 'F', (20,02,1992), "Rua D, 180", "Umbauba", "SE", "998888888", "shey@gamail.com")
  ]


-----Questao A

{-funçoes para cadastrar as seguintes pessoas-}

cadastrar :: Cidadao -> CadastroSUS -> CadastroSUS
cadastrar pessoa cadastroSUS =
    if (checarCPF (existCPF pessoa) cadastroSUS) == False

        then
            pessoa:cadastroSUS
        else
            error "Erro CPF dessa pessoa já existe no cadasto"

----preciso checar o CPF
checarCPF :: CPF -> CadastroSUS -> Bool
checarCPF cpf cadasto  = [ cp1 | cp1 <- cadasto, existCPF cp1==cpf] /= []

----Essa funçao da o Cpf
existCPF :: Cidadao -> CPF
existCPF (cpf,_,_,_,_,_,_,_,_) = cpf


----Questao B

-----funaçao para alterar endereço

alterarEndSUS :: CPF -> CadastroSUS -> Endereco -> CadastroSUS
alterarEndSUS cpfP cadastrosus enderecoNV =
         [atualizar cpfP y enderecoNV | y <- cadastrosus]
           where
               atualizar cpfP (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email) enderecoNV =
                   if cpfP == cpf
                       then (cpf, nome, genero, dataNasc, enderecoNV, municipio, estado, telefone, email)
                       else (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email)


alterarTelSUS :: CPF -> CadastroSUS -> Telefone -> CadastroSUS
alterarTelSUS cpfP cadastrosus telefoneNV =
         [atualizarTel cpfP x telefoneNV | x <- cadastrosus]
           where
               atualizarTel cpfP (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email) telefoneNV =
                   if cpfP == cpf
                       then (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefoneNV, email)
                       else (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email)


----Questao  C  

{-funçao que remove pessoa falecida-}

removeSUS :: CPF -> CadastroSUS -> CadastroSUS
removeSUS remove cadastrosus =
    if (checarCPF remove cadastrosus) == True
        then
            []
        else
            error "Erro CPF nao existe"






-----Questao D

type IdadeInicial = Int
type IdadeFinal   = Int
type FaixaIdade   = (IdadeInicial, IdadeFinal)
type Quantidade   = Int

{-Esses conjunto de funçoes, pesquisa a quantidade de pessoas por municipios e estados-}
cidadaosPorMunicipio :: CadastroSUS -> Municipio -> Quantidade
cidadaosPorMunicipio  cadt municipios  = length [ muni | muni <- cadt, existMuni muni == municipios]


cidadaosPorEstado :: CadastroSUS -> Municipio -> Quantidade
cidadaosPorEstado  cadt estados  = length [ estad | estad <- cadt, existMuni estad == estados]


cidadaoPorMunicipioIdade :: CadastroSUS -> Municipio -> FaixaIdade -> Quantidade
cidadaoPorMunicipioIdade  cdtsus municipio (x,y) = length [ mun | mun <- cdtsus,
   existMuni mun == municipio, (dataNascimento mun) >=  x && (dataNascimento mun) <= y]


cidadaoPorEstadoIdade :: CadastroSUS -> Estado -> FaixaIdade -> Quantidade
cidadaoPorEstadoIdade  cdtsus estado (x,y) = length [ est | est <- cdtsus,
   existEstado est == estado, (dataNascimento est) >=  x && (dataNascimento est) <= y]



dataNascimento :: Cidadao ->  Ano
dataNascimento (_,_,_,(d,m,a),_,_,_,_,_)
    | d <= head dataAtual && m <= head (tail dataAtual) || d > head dataAtual && m <= head (tail dataAtual)  = last dataAtual - a
    | otherwise                                     = last dataAtual - a - 1

dataAtual :: [Int]
dataAtual = [08,09,2021]


--- Fazendo chamada de apenas o municipio 
existMuni :: Cidadao -> Municipio
existMuni (_,_,_,_,_,muni,_,_,_) = muni

--- Fazendo chamada de apenas o estado
existEstado :: Cidadao -> Municipio
existEstado (_,_,_,_,_,estad,_,_,_) = estad





------questao E
{-Nessas funçoes recolho o municipio e a faixa idade e os coloco em coluna-}


listaMunicipioFaixa :: CadastroSUS -> Municipio -> [FaixaIdade] -> IO()
listaMunicipioFaixa cadastrosus municipio faixaidade = putStr (formataTotal (nafaixaid cadastrosus municipio faixaidade))

geraListaMunicipioFaixas :: CadastroSUS -> Municipio -> [FaixaIdade] -> [(FaixaIdade, Quantidade)]
geraListaMunicipioFaixas cadastrosus municipio faixaidade = nafaixaid cadastrosus municipio faixaidade


geraListaEstadoFaixas :: CadastroSUS -> Municipio -> [FaixaIdade] -> [(FaixaIdade, Quantidade)]
geraListaEstadoFaixas cadastrosus estado faixaidade = nafaixaestado cadastrosus estado faixaidade


listaEstadoFaixa :: CadastroSUS -> Municipio -> [FaixaIdade] -> IO()
listaEstadoFaixa cadastrosus estado faixaidade = putStr (formataTotal (nafaixaestado cadastrosus estado faixaidade))


nafaixaid :: CadastroSUS -> Municipio -> [FaixaIdade] -> [(FaixaIdade, Quantidade)]
nafaixaid cadastrosus municipio faixaidade = [ (x, cidadaoPorMunicipioIdade cadastrosus municipio x) | x<-faixaidade]


nafaixaestado :: CadastroSUS -> Estado -> [FaixaIdade] -> [(FaixaIdade, Quantidade)]
nafaixaestado cadastrosus estado faixaidade = [ (x, cidadaoPorEstadoIdade cadastrosus estado x) | x<-faixaidade]



------- questao  F


type QuantidadeFormatada = String
type LinhaFormatada      = String
type LinhasFormatadas    = String
type TotalFormatado      = String
type QuantidadeTotal     = Int


--- esse conjunto de funçoes formatada as linhas, casando com a questao E, que usar a funçao formataTotal
formatQuant :: Quantidade -> QuantidadeFormatada
formatQuant quantidade =  show quantidade 

transformletter ::FaixaIdade -> Int
transformletter (b,a) = 32 - length (show b ++ show a)

formataUmaLinha :: (FaixaIdade , Quantidade) -> LinhaFormatada
formataUmaLinha (faixa, quant) = show (fst faixa) ++ "-" ++ show (snd faixa) ++ replicate (transformletter faixa) ' ' ++ formatQuant quant

linhasFormatadas :: [(FaixaIdade , Quantidade)] -> [LinhasFormatadas]
linhasFormatadas lista =  [ formataUmaLinha x ++ "\n" | x<-lista]

formataTotal :: [(FaixaIdade , Quantidade)] -> TotalFormatado
formataTotal faixaidade = "FAIXA DE IDADE"++ replicate 15 ' '++"QUANTIDADE" ++"\n"++ concat (linhasFormatadas faixaidade) ++ 
     "TOTAL" ++ replicate (35 - length (show (sum (total faixaidade)))) ' ' ++ show (sum (total faixaidade))

total :: [(FaixaIdade, Quantidade)] -> [Int] 
total tot = [ x | (y,x)<- tot]


-------questao G


type Vacinados = [Vacinado]
type Vacina    = String
type TipoDose  = Int
type Dose      = (Vacina, Data)
type Doses     = [Dose]
type Vacinado  = (CPF, Doses)
----vacinados 
vacinados :: Vacinados
vacinados = [(91085086487,[("coronavac",(30,12,2020))]),
             (91085686084,[("astrazenica",(10,05,2021))]),
              (958285845,[("janssen",(30,07,2021))])
                    ]
----funçao da primeira dose 
aplicaPrimDose:: CPF -> CadastroSUS -> FaixaIdade -> Municipio -> Vacina -> Data -> Vacinados -> Vacinados
aplicaPrimDose cpf cadastrosus faixaidade municipio vacina data1 vacinados
       | estaVacinado1 cpf vacinados == True = error "Erro detectado, pois cidadão ja tomou a primeira dose"
       | checarCPF cpf cadastrosus == False  = error " Cidadão não existente no cadastro"
       | checarIdadeAtt cpf cadastrosus faixaidade == True = error " A idade nao corresponde com nenhum cpf"
       | checarMuni cpf cadastrosus municipio == True = error "municipio nao recorrente, atualize as informações de cadastro"
       | otherwise = vacinaDoTipo1 (cpf,[(vacina,data1)]):vacinados

---- funçao que indica que a janssen é so uma dose        
vacinaDoTipo1 :: Vacinado -> Vacinado
vacinaDoTipo1 (cpf,[(vacina,dia)]) = if vacina=="janssen" then (cpf, [(vacina,dia),(vacina,dia)]) else (cpf,[(vacina,dia)])       


estaVacinado1 :: CPF -> Vacinados -> Bool
estaVacinado1 cpf vacinados = [ item | item <- vacinados, cpf==transfCPFV item] /= []


checarIdadeAtt :: CPF -> CadastroSUS -> FaixaIdade -> Bool
checarIdadeAtt cpf cadastrosus (ini,fini)= [ x | x<-(checarCPF1 cpf cadastrosus), transData2 x >= ini && transData2 x <=fini] == []

checarCPF1 :: CPF -> CadastroSUS -> CadastroSUS
checarCPF1 cpf cadastrosus = [ x | x<-cadastrosus, existCPF x==cpf]

checarMuni :: CPF -> CadastroSUS -> Municipio -> Bool
checarMuni cpf cadastrosus muni = [ x | x<-checarCPF1 cpf cadastrosus, transMuni x == muni] ==[]

transData :: Data -> Ano
transData (_,_,ano) = ano

transfCPFV :: Vacinado -> CPF
transfCPFV (cpf,_) = cpf

transMuni :: Cidadao -> Municipio
transMuni (_,_,_,_,_,muni,_,_,_) = muni

transData2 :: Cidadao -> Ano
transData2 (_cpf,_nome,_genero, (d,m,a),_endereco,_municipio,_estado,_telefone,_email) 
    | d <= head dataAtual && m <= head (tail dataAtual) ||
      d > head dataAtual && m <= head (tail dataAtual)  = last dataAtual - a
    | otherwise                                     = last dataAtual - a - 1



{-quastao H-}

{-funçao para segunda dose -}
aplicaSegDose :: CPF -> Data -> Vacinados -> Vacinados
aplicaSegDose cpf data1 vacinados 
    | estaVacinado1 cpf vacinados == True           = error "erro, cidadão não tomou a primeira dose"
    | estaVacinado22 cpf vacinados == True          = error "cidadão já tomou segunda dose"
    | checaDataVacina1 cpf vacinados data1 == False = error "cidadão volto no tempo, ou a data esta errada"
    | otherwise                                     = addSegDose cpf vacinados data1 

    ---checa se ja tomou a segunda dose 
estaVacinado2 :: CPF -> Vacinados -> Vacinados
estaVacinado2 cpf vacinados =  [ item | item <- vacinados, cpf==transfCPFV item]

estaVacinado22 :: CPF -> Vacinados -> Bool
estaVacinado22 cpf vacinados = [ length x | (z,x) <- (estaVacinado2 cpf vacinados)] == [2]

addSegDose :: CPF -> Vacinados -> Data -> Vacinados
addSegDose cpf1 vacinados data2 = [attD data2 x  | x<- vacinados, fst x==cpf1] ++ [x | x<- vacinados, fst x /=cpf1]
     where attD data2 (cpf,[(x,y)])= (cpf,[(x,y),(x,data2)])


checaDataVacina1 :: CPF -> Vacinados -> Data -> Bool 
checaDataVacina1 cpf vacinados (d,m,a) = [ d1 | (_,[(_,(d1,m1,a1))]) <- estaVacinado2 cpf vacinados,
                                          d1>=d && m1 >=m && a1>=a || d1<=d && m1 >m && a1>=a ||
                                           d1<=d && m1<=m && a1>a || d1>=d && m1<=m && a1>a] ==[]




----Questao I

{-funçao para atualizar dados da vacinaçao, usei mesmo raçocinio da letra c-}
atualizaVacina :: CPF -> TipoDose -> Vacina -> Vacinados -> Vacinados
atualizaVacina cpf tipodose vacina vacinados 
     | existeCadastro cpf vacinados == False       = error "Cidadão informado não consta no cadastro"
     | quantasDoses cpf vacinados tipodose == True = error "Quantidade de doses informado inferior ao cadastro"
     | otherwise                                   = atualizarVacina cpf vacinados vacina 


existeCadastro :: CPF -> Vacinados -> Bool 
existeCadastro cpf vacinados = [ x | x<-vacinados, fst x == cpf] /= []

quantasDoses :: CPF -> Vacinados -> TipoDose -> Bool
quantasDoses cpf vacinados tipodose = head [ length x | (z,x) <- (estaVacinado2 cpf vacinados)] > tipodose


attVfun :: Doses -> Vacina -> Doses
attVfun doses vacina = [qualatt vacina x | x<-doses]
        where qualatt vacina (x,y) = (vacina,y)

atualizarVacina :: CPF -> Vacinados -> Vacina -> Vacinados
atualizarVacina cpfdado vacinados vacinaAT =
    [ mudaendereco cpfdado x vacinaAT | x<-vacinados]
       where
           mudaendereco cpfdado (cpf,x) vacinaAT =
               if cpfdado == cpf
                  then (cpf,attVfun x vacinaAT)
                  else (cpf,x)




--- questao J
 
{-funçoes para mostrar quantidade de pessoas no município/estado vacinadas com uma dada dose-}
quantidadeDoseMun :: Vacinados -> TipoDose -> Municipio -> CadastroSUS -> Quantidade
quantidadeDoseMun vacinados tipodose municipio cadastrosus = length [ x  | x <- vacinados,
                                                        quantDose x municipio tipodose cadastrosus == True ]

quantDose :: Vacinado -> Municipio -> TipoDose -> CadastroSUS -> Bool
quantDose (y,x) municipio tipodose cadastrosus =  length [ h |  h <- x] == tipodose && cpfMuni y municipio cadastrosus == True

cpfMuni :: CPF -> Municipio -> CadastroSUS -> Bool 
cpfMuni cpf municipio cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && transMuni x == municipio] /=[]



quantidadeDoseEst :: Vacinados -> TipoDose -> Estado -> CadastroSUS -> Quantidade
quantidadeDoseEst vacinados tipodose estado cadastrosus = length [ x  | x <- vacinados,
                                                        quantDoseE x estado tipodose cadastrosus == True ]


quantDoseE :: Vacinado -> Estado -> TipoDose -> CadastroSUS -> Bool
quantDoseE (y,x) estado tipodose cadastrosus =  length [ h |  h <- x] == tipodose && cpfestado y estado cadastrosus == True


cpfestado :: CPF -> Estado -> CadastroSUS -> Bool 
cpfestado cpf estado cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && existEstado x == estado] /=[]



---- questao k 


{-Usei a mesma ideia da letra j so que acresentando a faixa idade-}
quantidadeMunIdDose :: Vacinados -> Municipio -> FaixaIdade -> TipoDose -> CadastroSUS -> Quantidade
quantidadeMunIdDose vacinados municipio faixaidade tipodose cadastrosus = length [ x  | x <- vacinados, numerodesDose x municipio tipodose faixaidade cadastrosus == True ]

numerodesDose :: Vacinado -> Municipio -> TipoDose -> FaixaIdade -> CadastroSUS -> Bool
numerodesDose (y,x) municipio tipodose faixaidade cadastrosus =  length [ h |  h <- x] == tipodose && cpfMunicipI y municipio faixaidade cadastrosus == True

cpfMunicipI :: CPF -> Municipio -> FaixaIdade -> CadastroSUS -> Bool 
cpfMunicipI cpf municipio faixaidade cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && transMuni x == municipio] /=[] 
       && [x | x<-cadastrosus, transData2 x> fst faixaidade && transData2 x< snd faixaidade] /= []


quantidadeEstIdDose :: Vacinados -> Estado -> FaixaIdade -> TipoDose -> CadastroSUS -> Quantidade
quantidadeEstIdDose vacinados estado faixaidade tipodose cadastrosus = length [ x  | x <- vacinados, numerodesDose x estado tipodose faixaidade cadastrosus == True ]

numerodesDose2 :: Vacinado -> Estado -> TipoDose -> FaixaIdade -> CadastroSUS -> Bool
numerodesDose2 (y,x) estado tipodose faixaidade cadastrosus =  length [ h |  h <- x] == tipodose && cpfMunicipI y estado faixaidade cadastrosus == True

cpfMunicipII :: CPF -> Estado -> FaixaIdade -> CadastroSUS -> Bool 
cpfMunicipII cpf estado faixaidade cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && existEstado x == estado] /=[] 
       && [x | x<-cadastrosus, transData2 x> fst faixaidade && transData2 x< snd faixaidade] /= []



----- questao L
{-funçao para pegar quantidade de pessoas no município/estado vacinadas por tipo de vacina e por dose -}

quantidadeMunVacDose :: Vacinados -> Municipio -> Vacina -> TipoDose -> CadastroSUS -> Quantidade
quantidadeMunVacDose vacinados municipio vacina tipodose cadastrosus = length [ x  | x <- vacinados, numerodesDose3 x municipio vacina tipodose cadastrosus == True ]

quantidadeEstVacDose :: Vacinados -> Estado -> Vacina -> TipoDose -> CadastroSUS -> Quantidade
quantidadeEstVacDose vacinados estado vacina tipodose cadastrosus = length [ x  | x <- vacinados, numerodesDose5 x estado vacina tipodose cadastrosus == True ]

numerodesDose3 :: Vacinado -> Municipio -> Vacina -> TipoDose -> CadastroSUS -> Bool
numerodesDose3 (y,x) municipio vacina tipodose cadastrosus =  length [ h |  h <- x, transDoses h == vacina] == tipodose && cpfporMunicip y municipio cadastrosus == True

transDoses :: Dose -> String
transDoses (x,_) = x

cpfporMunicip:: CPF -> Municipio -> CadastroSUS -> Bool 
cpfporMunicip cpf municipio cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && transMuni x == municipio] /=[]

numerodesDose5 :: Vacinado -> Estado -> Vacina -> TipoDose -> CadastroSUS -> Bool
numerodesDose5 (y,x) estado vacina tipodose cadastrosus =  length [ h |  h <- x, transDoses h == vacina] == tipodose && checkvacinascpf y estado cadastrosus == True

transDoses1 :: Dose -> String
transDoses1 (x,_) = x

checkvacinascpf :: CPF -> Estado -> CadastroSUS -> Bool 
checkvacinascpf cpf estado cadastrosus = [ x | x<-cadastrosus, existCPF x == cpf && transMuni x == estado] /=[]



---questao M

{-nessa funçao ela puxa a quantidade de pessoas atrasadas na segunda dose no município/estado-}
quantidadeMunAtrasados :: Vacinados -> CadastroSUS -> Municipio -> Quantidade
quantidadeMunAtrasados vacinados cadastrosus municipio = length [x | x<-vacinados,  quantidadeVac x == True && 
    (checaMunicipio3 (pegacpf x) cadastrosus municipio) == True]

checaMunicipio3 :: CPF -> CadastroSUS -> Municipio -> Bool
checaMunicipio3 cpf cadastrosus municipio = [x |x <- cadastrosus, (rMuni x (existCPF x) municipio) == True] /= []

rMuni :: Cidadao -> CPF -> Municipio -> Bool 
rMuni (c,_,_,_,_,m,_,_,_) cpf municipio = if c==cpf && m== municipio then True else False

quantidadeVac :: Vacinado -> Bool 
quantidadeVac (_,doses) = length [x |x<-doses, recolheVac x == True] == 1

recolheVac :: Dose -> Bool 
recolheVac (y,x) 
   | y=="CoronaVac" = (existDataNasc11 x > 21) == True
   | y == "Pfizer" || y == "AstraZenica" = (existDataNasc11 x > 90) == True



quantidadeEstAtrasados :: Vacinados -> CadastroSUS -> Estado -> Int
quantidadeEstAtrasados vacinados cadastrosus estado = length [x | x<-vacinados,  quantidadeVac x == True && 
    (checaMunicipio3 (pegacpf x) cadastrosus estado) == True]

existDataNasc11 :: Data -> Int
existDataNasc11 (d,m,_)
    | d >= head dataAtual && m == head  (tail dataAtual) = d - head dataAtual
    | d <= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>2) ||
      d >= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>2)
       = (head dataAtual - d) + 90
    | d >= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>1) ||
      d <= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>1)
       = (d - head dataAtual) + 60
    | d >= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>0) ||
      d <= head dataAtual && ((m < head (tail dataAtual)) && ( head (tail dataAtual)-m)>0)
       = (d - head dataAtual) + 30
    | otherwise = 0



pegacpf :: Vacinado -> CPF
pegacpf (cpf,_) = cpf    

veEst :: Cidadao -> CPF -> Estado -> Bool 
veEst (c,_,_,_,_,_,e,_,_) cpf municipio = if c==cpf && e== municipio then True else False

checaEst :: CPF -> CadastroSUS -> Estado -> Bool
checaEst cpf cadastrosus estado = [x |x <- cadastrosus, (veEst x (existCPF x) estado) == True] /= []



---- questao N 
{-- Algumas pessoas podem ter seu email/genero digitado errado no cadratro, ou ate msm querer mudar de email, sendo assim precisado mudar no cadrastro-}

------Esta funçao altera o email
alterarem :: CPF -> CadastroSUS -> Email -> CadastroSUS
alterarem cpfP cadastrosus emailNV =
         [atualizarEmail cpfP x emailNV | x <- cadastrosus]
           where
               atualizarEmail cpfP (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email) emailNV =
                   if cpfP == cpf
                       then (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, emailNV)
                       else (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email)


-------Esta funaçao altera o genero
alterargeneno:: CPF -> CadastroSUS -> Genero -> CadastroSUS
alterargeneno cpfP cadastrosus generoNV =
         [atualizarGenero cpfP x generoNV | x <- cadastrosus]
           where
               atualizarGenero cpfP (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email) generoNV =
                   if cpfP == cpf
                       then (cpf, nome, generoNV, dataNasc, endereco, municipio, estado, telefone, email)
                       else (cpf, nome, genero, dataNasc, endereco, municipio, estado, telefone, email)