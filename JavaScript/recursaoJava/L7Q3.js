const palindromo = (str) => {
    if (str.length < 2) return true
    else {
        const primeiro = str.slice(0,1)
        const ultimo = str.slice(-1)
        const meio = str.slice(1,-1)
        return (primeiro===ultimo) && palindromo(meio)
    }
} 

const palindromoAtt =([x,...xs]) => {
    if (xs.length == 0) return true
    else{
        return x == xs[-1] && palindromoAtt(palindromoAtt(xs[1]))
    }
}

console.log(palindromoAtt('romametemamor'))