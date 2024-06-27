const pot = (m,n) => {
    if (n < 0) return 1/potaux(m,n*(-1))
    else return potaux(m,n)
} 


const potaux = (m,n) => {
    if (n == 0) return 1
    else return m * pot(m,n-1) 
}
console.log(pot(8,5))