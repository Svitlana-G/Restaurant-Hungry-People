import data from '../data/pizza.json'
import '../css/Menu.css'

const Menu = () => {

    return (
        <div className="menu">
            <h2>DELICIOUS MENU</h2>
            <div className="line"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h4>
            <ul>
                <li>SOUPE</li>
                <li>PIZZA</li>
                <li>PASTA</li>
                <li>DESERT</li>
                <li>WINE</li>
                <li>BEER</li>
                <li>DRINKS</li>
            </ul>
            <section className="prices">
                {data && data.map(ele => {
                    return (
                        <div>
                            <p>{ele.name}  . . . .  {ele.price}</p>
                            <p>{ele.description}</p>
                        </div>
                    )
                })}
            </section>

        </div>
    );
}

export default Menu;
<div className="menu">

</div>