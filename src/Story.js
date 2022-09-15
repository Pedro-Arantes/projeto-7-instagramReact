

export default function Story(props) {
    return (
        <div className="story">
            <div className="imagem">
                <img alt="" src={props.src} />
            </div>
            <div className="usuario">
                {props.user}
            </div>
        </div>
    )
}