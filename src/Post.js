import React from "react"



export default function Post(props) {
    const ponto = props.NumTxt
    const [book, setBook] = React.useState("bookmark-outline")
    const [Like, setLike] = React.useState("heart-outline")
    const [LikeClass, setLikeC] = React.useState("")
    const [contador, setCont] = React.useState(props.NumTxt)




    function SalvaPost() {
        if (book === "bookmark-outline") {
            setBook("bookmark");

        } else {
            setBook("bookmark-outline");

        }
    }

    function LikePost() {
        if (Like === "heart-outline") {
            setLike("heart");
            setLikeC("Red");
            let p = contador
            p++
            setCont(p)
            //Contador(num,1)
        } else {
            setLike("heart-outline");
            setLikeC("")
            let p = contador
            p--
            setCont(p)
            //elemento1.innerHTML = Number(elemento1.innerHTML)-1
            //Contador(num,2)

            //return num -=1
        }
    }

    function LikeCont() {

        let p = contador
        p++
        setCont(p)
        setLike("heart");
        setLikeC("Red");
    }


    const topo = <div className="topo">
        <div className="usuario">
            <img alt="" src={props.UserImg} />
            {props.user}
        </div>
        <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
    </div>;
    const id = `heart${props.id}`
    const id1 = `Num${props.id}`

    const conteudo = <div className="conteudo">
        <img onDoubleClick={LikeCont} alt="" src={props.img} />
    </div>;

    const curtidas = <div className="curtidas">
        <img alt="" src={props.CurtImg} />
        <div className="texto">
            Curtido por <strong>{props.NameTxt}</strong> e <strong>outras <span id={id1}>{contador.toLocaleString('pt-br').replace(/,/g, '.')}</span>  pessoas</strong>
        </div>
    </div>;

    const modelo =
        <div className="post">
            {topo}
            {conteudo}
            <div className="fundo">
                <div className="acoes">
                    <div>
                        <span className={LikeClass}><ion-icon id={id} onClick={LikePost} name={Like}></ion-icon></span>

                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div id="bookmark">
                        <ion-icon onClick={SalvaPost} name={book}></ion-icon>
                    </div>
                </div>
                {curtidas}

            </div>
        </div>

    return (modelo)
}