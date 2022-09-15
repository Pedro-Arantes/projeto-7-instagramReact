import EditaNome from "./EditaNome";

export default function DivUsuario(prop){

    return(
        <div className="usuario">
            <img alt="" src={prop.src} />
            <div className="texto">

                <strong id="txtUser">{prop.txtUser}</strong>
                <div>
                    {prop.txt}
                    <div className="pencil" >
                        <ion-icon onClick={EditaNome} name="pencil-outline"></ion-icon>
                    </div>

                </div>


            </div>

        </div>
    )
}