

export default function Contador(num,boolean){
    
    if (boolean === 1) {
        const numero = num+=1;
        console.log(numero)
        return numero;
    }else if (boolean === 2){
        const numero = num-=1;
        console.log(numero)
        return numero;
    }else{
        return num ;
    }
}