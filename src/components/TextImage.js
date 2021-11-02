import '../css/TextImage.css'

const TextImage = (props) => {
    return (
        <div className="text-image">
            <section>
                <h2>{props.h2}</h2>
                <div className="line"></div>
                <h4>{props.h4}</h4>
                <p>{props.p}</p>
            </section>
            <section>
                <img src={props.image} alt="" />
            </section>
        </div>
    );
}

export default TextImage;