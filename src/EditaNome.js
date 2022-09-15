
export default function EditaNome (){
    const nome = prompt("Qual é o seu nome?")
    const elemento = document.querySelector("#txtUser")
    
    elemento.innerHTML = nome;
                            
}  