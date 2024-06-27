const f =(n) => { 
    if (n == 1) {return 2}
    else {return f(n-1)+5}
}

console.log(f(6))