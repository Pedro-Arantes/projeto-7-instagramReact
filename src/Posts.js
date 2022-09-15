import Post  from "./Post";

export default function Posts() {

    const array = [{ user: "meowed", UserImg: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", CurtImg: "assets/img/respondeai.svg", NameTxt: "respondeai", NumTxt: "101.523" },

    { user: "barked", UserImg: "assets/img/barked.svg", img: "assets/img/dog.svg", CurtImg: "assets/img/adorable_animals.svg", NameTxt: "adorable_animals", NumTxt: "99.159" }];



    return (
        <div className="posts">


            {array.map((item, i) => <Post UserImg={item.UserImg} src={item.src} user={item.user} img={item.img} CurtImg={item.CurtImg} NameTxt={item.NameTxt} NumTxt={item.NumTxt} key={i}  id = {i}/>)}

        </div>
    )
}