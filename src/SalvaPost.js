import DesSalvaPost from "./DesSalvaPost";
import ReactDOM from 'react-dom';

export default function SalvaPost(){
    
    const elemento = document.querySelector("#bookmark")
    const modelo = <ion-icon onClick={DesSalvaPost} name="bookmark"></ion-icon>
    
    ReactDOM.render(modelo, elemento);
}