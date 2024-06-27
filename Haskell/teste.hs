soma :: Int -> Int -> Int -> Int
soma m n z
 | m >= n = m
 | n >= z = n
 | z <= n = z
 | otherwise = z