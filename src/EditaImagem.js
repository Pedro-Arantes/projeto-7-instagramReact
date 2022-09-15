

export default function EditaImagem(){
    const nome = prompt("Qual é a imagem que desejas utilizar?")
    const elemento = document.querySelector("#imgUser")
    
    elemento.src = nome;
}