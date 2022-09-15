import SalvaPost from "./SalvaPost";
import ReactDOM from 'react-dom';

export default function DesSalvaPost(){

    const elemento = document.querySelector("#bookmark")
    const modelo = <ion-icon  onClick={SalvaPost} name="bookmark-outline"></ion-icon>

    ReactDOM.render(modelo, elemento);
}