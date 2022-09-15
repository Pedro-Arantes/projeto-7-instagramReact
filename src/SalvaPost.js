import DesSalvaPost from "./DesSalvaPost";
import ReactDOM from 'react-dom';

export default function SalvaPost(el){
    
    const elemento = el.target
    const modelo = <ion-icon onClick={DesSalvaPost} name="bookmark"></ion-icon>
    if (elemento.name === "bookmark-outline") {
        elemento.name = "bookmark";
        
    }else{
        elemento.name = "bookmark-outline";
        
    }
    
}