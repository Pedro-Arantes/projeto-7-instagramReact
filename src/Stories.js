import Story from "./Story"


export default function Stories() {

    const array = [
        {
            src: "assets/img/9gag.svg",
            user: " 9gag"
        },
        {
            src: "assets/img/meowed.svg",
            user: " meowed"
        },
        {
            src: "assets/img/barked.svg",
            user: " barked"
        },
        {
            src: "assets/img/nathanwpylestrangeplanet.svg",
            user: " nathanwpylestrangeplanet"
        },
        {
            src: "assets/img/wawawicomics.svg",
            user: " wawawicomics"
        },
        {
            src: "assets/img/respondeai.svg",
            user: " respondeai"
        },
        {
            src: "assets/img/filomoderna.svg",
            user: " filomoderna"
        },
        {
            src: "assets/img/memeriagourmet.svg",
            user: " memeriagourmet"
        }
    ]

    //{array.map(item,i) => modelo}
    return (


        <div className="stories">


            {array.map((item, i) => <Story src={item.src} user={item.user} key={i} />)}


            <div className="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>



    )
}