const caminhos = (n) => 
    (n===1)? 1 : n*caminhos(n-1)

console.log(caminhos(3))