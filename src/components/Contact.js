import '../css/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Contact = () => {
    return (
        <div className="contact">
            <h2>CONTACT</h2>
            <div className="line"></div>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est a, tempor magna.</h4>
            <form>
                <input type="text" name="contact_name" placeholder="Name" />
                <input type="email" name="contact_email" placeholder="Email" />
                <input type="tel" name="contact_tel" placeholder="Phone" />
                <textarea name="contact_message" placeholder="Message"></textarea>
            </form>
            <div className="senden">
                <div className="information">
                    <p> <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: 'E8C300' }}></FontAwesomeIcon> 5th London Boulevard, U.K. </p>
                    <p>	<FontAwesomeIcon icon={faPhone} style={{ color: 'E8C300' }}></FontAwesomeIcon> +40 729 131 637/+40 726 458 782</p>
                    <p><FontAwesomeIcon icon={faEnvelope} style={{ color: 'E8C300' }}></FontAwesomeIcon> office@mindblister.com</p>
                </div>
                <button>SEND MESSAGE</button>
            </div>
            <img src="../img/map.png" alt="" />
        </div>
    );
}

export default Contact;