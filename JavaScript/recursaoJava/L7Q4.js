const indeof = x => typeof x == 'undefined'

const meuMap = (f, [x,...xs])  =>  {
    if (indeof(x)) return []
    else return [f(x),...meuMap(f,xs)] 
}

const dobro = (x) => x* 2

console.log(meuMap(dobro,[1,2,3,4]))