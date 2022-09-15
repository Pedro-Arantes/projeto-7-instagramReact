import  Sugestao  from "./Sugestao";

export default function Sugestoes() {

    const array = [
        { user: "bad.vibes.memes", userImg: "assets/img/bad.vibes.memes.svg", razao: "Segue você" },
        { user: "chibirdart", userImg: "assets/img/chibirdart.svg", razao: "Segue você" },
        { user: "razoesparaacreditar", userImg: "assets/img/razoesparaacreditar.svg", razao: "Novo no Instagram" },
        { user: "adorable_animals", userImg: "assets/img/adorable_animals.svg", razao: "Segue você" },
        { user: "smallcutecats", userImg: "assets/img/smallcutecats.svg", razao: "Segue você" }]



    return (
        <div className="sugestoes">
            <div className="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>


           

            {array.map((item, i) => <Sugestao userImg={item.userImg} razao={item.razao} user={item.user} key={i} />)}




        </div>
    )
}