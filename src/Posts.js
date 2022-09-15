import Post  from "./Post";
import Contador from "./Contador";

export default function Posts() {

    const array = [{ user: "meowed", UserImg: "assets/img/meowed.svg", img: "assets/img/gato-telefone.svg", CurtImg: "assets/img/respondeai.svg", NameTxt: "respondeai", NumTxt: Contador(101523,0) },

    { user: "barked", UserImg: "assets/img/barked.svg", img: "assets/img/dog.svg", CurtImg: "assets/img/adorable_animals.svg", NameTxt: "adorable_animals", NumTxt: Contador(99159,0)  }];



    return (
        <div className="posts">


            {array.map((item, i) => <Post UserImg={item.UserImg} src={item.src} user={item.user} img={item.img} CurtImg={item.CurtImg} NameTxt={item.NameTxt} NumTxt={item.NumTxt} key={i}  id = {i}/>)}

        </div>
    )
}