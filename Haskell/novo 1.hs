import CodeWorld
import CodeWorld.Sketches


main = drawingOf casas

casas = casa True black & 
        translated (-5) 0 (casa False yellow ) &
        translated (-9) 0 (casa True yellow ) &
        translated (9) 0 (casa False blue ) 
        ---false para casas sem chamines por que definimos em baixo

casa :: Bool -> Color -> Picture
casa isChamine color 
  | isChamine == True =  teto & porta & parede & chamine
  | otherwise = teto & porta & parede
  
  where parede = colored color (solidRectangle 4 3)
        teto = colored color (solidPolygon [(0,3), (-3,1), (3,1)])
        porta = translated 0 (-0.75) (colored brown (solidRectangle 1 1.5))
          
        chamine = translated 1.5 2.1 (solidRectangle 0.3 0.5)
