const fato = n => {
    if (n == 1) return 1
    else return fato(n-1) * n
}


console.log(fato(5))