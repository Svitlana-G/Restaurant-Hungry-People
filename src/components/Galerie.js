import '../css/Galerie.css'
import TextImage from './TextImage';

const Galerie = () => {
    return (
        <div className="galerie">
            <h5> specialties</h5>
            <TextImage
                h2="chocolate pancakes"
                h4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
                p="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
                image="../img/galerie.png">
            </TextImage>
            <section className="circle">
                <div className="round"></div>
                <div className="round"></div>
                <div className="round"></div>
            </section>
        </div>
    );
}

export default Galerie;