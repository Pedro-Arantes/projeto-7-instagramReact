

export default function Sugestao(props){
    const modelo = <div className="sugestao">
                    <div className="usuario">
                        <img alt="" src={props.userImg} />
                        <div className="texto">
                            <div className="nome">{props.user}</div>
                            <div className="razao">{props.razao}</div>
                        </div>
                    </div>

                    <div className="seguir">Seguir</div>
                </div>

    return modelo
}