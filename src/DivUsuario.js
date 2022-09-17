
import React from 'react'

export default function DivUsuario(prop){

    const [nome, setValor] = React.useState("Catana");
    const [img, setImg] = React.useState("assets/img/catanacomics.svg" );

    function EditaNome(){
        const n = prompt("qual é o seu nome ?");
        setValor(n);
    }

    function EditaImagem(){
        const n = prompt("Qual é a imagem que desejas utilizar?")
        setImg(n);
    }

    return(
        <div className="usuario">
            <img alt="" id="imgUser" onClick={EditaImagem} src={img} />
            <div className="texto">

                <strong >{prop.txtUser}</strong>
                <div>
                        <span id="txtUser">{nome}</span>
                    <div className="pencil" >
                        <ion-icon onClick={EditaNome} name="pencil-outline"></ion-icon>
                    </div>

                </div>


            </div>

        </div>
    )
}