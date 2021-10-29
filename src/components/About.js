import '../css/About.css'

const About = () => {
    return (
        <div className="about">
            <section>
                <h2>about us</h2>
                <div className="line"></div>
                <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h4>
                <p>Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet.</p>
            </section>
            <section>
                <img src="../img/about.png" alt="" />
            </section>
        </div>
    );
}

export default About;