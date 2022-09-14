

export default function Posts() {

    const array = [{ user: "meowed", UserImg: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", CurtImg: "assets/img/respondeai.svg", NameTxt: "respondeai", NumTxt: "101.523" },
    
    { user: "barked", UserImg: "assets/img/barked.svg", img: "assets/img/dog.svg", CurtImg: "assets/img/adorable_animals.svg", NameTxt: "adorable_animals", NumTxt: "99.159" }];

    

        return (
        <div className="posts">
        {array.map((item, i) => {
            const topo = <div className="topo">
            <div className="usuario">
                <img alt="" src= {item.UserImg}/>
                {item.user}
            </div>
            <div className="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>;
    
        const conteudo = <div className="conteudo">
        <img alt="" src={item.img} />
        </div>;
    
        const curtidas = <div className="curtidas">
        <img alt="" src={item.CurtImg} />
        <div className="texto">
            Curtido por <strong>{item.NameTxt}</strong> e <strong>outras {item.NumTxt} pessoas</strong>
        </div>
        </div>;
    
        const modelo = 
            <div key={i} className="post">
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

            return modelo
        })}

    </div>
    )
}