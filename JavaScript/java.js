const fun = (a,b) => {
    if (a==b) return  a
    else if (a>b) return fun(a-b,b)
    else return fun(a,b-a)
} 


console.log(fun(15,9))