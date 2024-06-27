const resto = (n,m) => n < m ? n : resto(n-m,m)

console.log(resto(8,10))