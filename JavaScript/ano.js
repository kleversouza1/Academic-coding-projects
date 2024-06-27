const bissexto = (ano) => {
	if(ano % 4 === 0){
  	if(ano % 100 === 0){
    	if(ano % 400 === 0){
      	return true
      }
      else{
      	return false
      }
    }
    else{
    	return true;
    }
  }
  else{
  	return false;
  }
}

const data = new Date();
const year = data.getFullYear();

console.log(bissexto(2016));
console.log(bissexto(2000));
console.log(bissexto(1700));
console.log(bissexto(1800));
console.log(bissexto(100));
