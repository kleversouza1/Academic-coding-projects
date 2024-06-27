const palindromo = (txt) => {
    const preprocessa = (txt) => {
        if (txt==='') return ''
        //transforma em minúsculas
        const minusculas = txt.toLowerCase()
        //retira espaços
        const semespacos = minusculas.replace(/\s/g,'')
        //retira acentuação
        //obs: o método "normalize" serve para converter 
        //uma string no seu formato padrão Unicode. 
        //Neste caso, utilizamos o parâmetro NFD que pode 
        //separar os acentos das letras e devolver os seus códigos Unicode.
        const semacentos = semespacos.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        //retira os demais caracteres que não são letras
        const letras = semacentos.match(/[a-z]/g).join('')
        return letras
    }
    const helper = (txt) => {
        if (txt.length < 2) return true
        else if (txt[0]!==txt.slice(-1)) return false
        else return helper(txt.slice(1,-1))
    }
    const txtlimpo = preprocessa(txt)
    return helper(txtlimpo)
}
 console.log(palindromo(['roma amor']))