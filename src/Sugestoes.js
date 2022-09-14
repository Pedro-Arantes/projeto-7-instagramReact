

export default function Sugestoes() {

    const array = [
    {user: "bad.vibes.memes",userImg: "assets/img/bad.vibes.memes.svg",razao: "Segue você"},
    {user: "chibirdart",userImg: "assets/img/chibirdart.svg",razao: "Segue você"},
    {user: "razoesparaacreditar",userImg: "assets/img/razoesparaacreditar.svg",razao: "Novo no Instagram"},
    {user: "adorable_animals",userImg: "assets/img/adorable_animals.svg",razao: "Segue você"},
    {user: "smallcutecats",userImg: "assets/img/smallcutecats.svg",razao: "Segue você"}]

    

    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>


            {array.map((item,i) => {
                            const modelo = <div key={i} className="sugestao">
                            <div className="usuario">
                                <img alt="" src={item.userImg} />
                                <div className="texto">
                                    <div className="nome">{item.user}</div>
                                    <div className="razao">{item.razao}</div>
                                </div>
                            </div>
                    
                            <div className="seguir">Seguir</div>
                        </div>

                            return modelo
                        })}
            

            

        </div>
    )
}