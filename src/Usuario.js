
export default function Usuario (){
    const obj = {txtUser: "catanacomics",txt:"Catana",src: "assets/img/catanacomics.svg"}

    return(
        <div className="usuario">
                        <img alt="" src={obj.src} />
                        <div className="texto">
                            
                            <strong>{obj.txtUser}</strong>
                            <div>
                            {obj.txt}
                            <div className = "pencil" >
                            <ion-icon name="pencil-outline"></ion-icon>
                            </div>
                            
                            </div>
                            
                            
                        </div>
                        
                    </div>
    )
}