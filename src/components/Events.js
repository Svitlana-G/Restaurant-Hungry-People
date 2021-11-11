
import '../css/Events.css'

const Events = () => {
    return (
        <div className="events">
            <h5>PRIVATE EVENTS</h5>
            <section className="flex">
                <article>
                    <div className="gridImage">
                        <img src="../img/events-1.png" alt="" className="gridImageLeft" />
                        <div className="boxLeft"></div>
                    </div>
                    <h3>weddings</h3>
                </article>
                <article>
                    <h3>corporate pzrties</h3>
                    <div className="gridImage">
                        <img src="../img/events-2.png" alt="" className="gridImageRight" />
                        <div className="boxRight"></div>
                    </div>
                </article>
            </section>
            <p>For private events please call:  <span>+40 729 131 637/+40 726 458 782 </span>or use the contact form.</p>
        </div>
    );
}


export default Events;