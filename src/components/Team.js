import TextImage from "./TextImage";
import '../css/Team.css'

const Team = () => {
    return (
        <div className="team">
            <h5>OUR TEAM</h5>
            <TextImage
                h2="MASTER CHEF"
                h4="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna."
                p="Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper laoreet."
                image="../img/team.png">
            </TextImage>
        </div>

    );
}

export default Team;

