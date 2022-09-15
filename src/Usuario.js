

import DivUsuario from "./DivUsuario";


export default function Usuario() {
    const obj = { txtUser: "catanacomics", txt: "Catana", src: "assets/img/catanacomics.svg" }

    return (

        <DivUsuario src = {obj.src} txtUser ={obj.txtUser} txt = {obj.txt} />

        )
}