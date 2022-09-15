import Contador  from "./Contador";

export default function LikePost (num,x,id){

    const elemento = id.target;
    console.log(x);
    const elemento1 = document.querySelector(`#Num${x}`)

    
    
    if (elemento.name === "heart-outline") {
        elemento.name = "heart";
        elemento.classList.add("Red")
        elemento1.innerHTML = Number(elemento1.innerHTML)+1
        Contador(num,1)
    }else{
        elemento.name = "heart-outline";
        elemento.classList.remove("Red")
        elemento1.innerHTML = Number(elemento1.innerHTML)-1
        Contador(num,2)
        
        //return num -=1
    }
    
}