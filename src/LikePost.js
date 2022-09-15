

export default function LikePost (x){

    const elemento = x.target;
    
    

    if (elemento.name === "heart-outline") {
        elemento.name = "heart";
        elemento.classList.add("Red")
    }else{
        elemento.name = "heart-outline";
        elemento.classList.remove("Red")
    }
    
}