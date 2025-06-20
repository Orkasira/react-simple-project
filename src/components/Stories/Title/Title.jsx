import "./Title.css"
import arrow from "../../../assets/arrow.png"

function Title(){
    return(
        <>
        <section className="container">
        <div className="text-content">
            <p className="story">LAST MONTH’S FEATURED STORY</p>
            <h1 className="title">HAZY FULL MOON OF APPALACHIA</h1>
            <p className="march">March 2nd 2020 <strong>by John Appleseed</strong></p>
            <p className="para">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
            <div className="arrow">
                <p className="read"> READ THE STORY</p>
                <img src={arrow}/>
                <div className="glow"></div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Title