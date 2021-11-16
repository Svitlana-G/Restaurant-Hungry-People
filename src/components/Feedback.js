import '../css/Feedback.css'

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="b-table">
                <section>
                    <h2>Your Feedback</h2>
                    <div className="line"></div>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <select name="stars">
                            <option selected>Stars</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                        </select>
                        <textarea name="feedback_message" placeholder="Your message"></textarea>
                        <button className="btnBooking">SEND NOW</button>
                    </form>
                </section>
                <section>
                    <img src="../img/feedback.png" alt="" />
                </section>
            </div>
            <p>Mon - Fri: <span>8PM - 10PM</span>, Sat - Sun: <span>8PM - 3AM</span>, Phone: <span>+40 729 131 637/+40 726 458 782</span></p>
        </div>
    );
}

export default Feedback
