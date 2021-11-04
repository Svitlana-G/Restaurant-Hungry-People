import '../css/Booking.css'

const Booking = () => {
    return (
        <div className="booking">
            <div className="b-table">
                <section>
                    <h2>book a table</h2>
                    <div className="line"></div>
                    <form>
                        <input type="text" name="name" placeholder="Name" />
                        <input type="email" name="email" placeholder="Email" />
                        <input type="tel" name="phone" placeholder="Phone" />
                        <select name="people">
                            <option selected>People</option>
                            <option value="one">1</option>
                            <option value="two">2</option>
                            <option value="three">3</option>
                            <option value="four">4</option>
                            <option value="five">5</option>
                            <option value="six">6</option>
                        </select>
                        <input type="date" name="date" placeholder="Date (mm/dd)" />
                        <select name="time">
                            <option selected>Time</option>
                            <option value="two">12:00</option>
                            <option value="three">13:00</option>
                            <option value="four">14:00</option>
                            <option value="five">15:00</option>
                            <option value="six">16:00</option>
                            <option value="four">17:00</option>
                            <option value="five">18:00</option>
                            <option value="six">19:00</option>
                            <option value="four">20:00</option>
                            <option value="five">21:00</option>
                            <option value="six">22:00</option>
                        </select>
                        <button className="btnBooking">BOOK NOW</button>
                    </form>
                </section>
                <section>
                    <img src="../img/booking.png" alt="" />
                </section>
            </div>
            <p>Mon - Fri: <span>8PM - 10PM</span>, Sat - Sun: <span>8PM - 3AM</span>, Phone: <span>+40 729 131 637/+40 726 458 782</span></p>
        </div>
    );
}

export default Booking;
