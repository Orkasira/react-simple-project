import "./FeatFinish.css"
import arrow from "../../../assets/arrow.png";

function FeatFinish(){
    return(
        <>
        <section className="finish">
            <div className="finish-text">
                <h2>We’re in beta. Get your invite today!</h2>
                <div className="link">
                    <p>GET AN INVITE</p>
                    <img src={arrow}/>
                </div>
            </div>
        </section>
        </>
    )
}

export default FeatFinish;