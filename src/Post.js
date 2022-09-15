

export default function Post (props){
    const topo = <div className="topo">
                    <div className="usuario">
                        <img alt="" src={props.UserImg} />
                        {props.user}
                    </div>
                    <div className="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>;

                const conteudo = <div className="conteudo">
                    <img alt="" src={props.img} />
                </div>;

                const curtidas = <div className="curtidas">
                    <img alt="" src={props.CurtImg} />
                    <div className="texto">
                        Curtido por <strong>{props.NameTxt}</strong> e <strong>outras {props.NumTxt} pessoas</strong>
                    </div>
                </div>;

                const modelo =
                    <div  className="post">
                        {topo}
                        {conteudo}
                        <div className="fundo">
                            <div className="acoes">
                                <div>
                                    <ion-icon name="heart-outline"></ion-icon>
                                    <ion-icon name="chatbubble-outline"></ion-icon>
                                    <ion-icon name="paper-plane-outline"></ion-icon>
                                </div>
                                <div>
                                    <ion-icon name="bookmark-outline"></ion-icon>
                                </div>
                            </div>
                            {curtidas}

                        </div>
                    </div>

                    return(modelo)
}