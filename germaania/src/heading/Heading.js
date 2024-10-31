import logo from '../media/logo_colored.svg';
import Cover1 from '../media/images/covers/cover1.jpg';
import Cover2 from '../media/images/covers/cover2.jpg';
import Cover3 from '../media/images/covers/cover3.jpg';
import './Heading.css'

const Heading = () => {

    const coverArray = [Cover1, Cover2, Cover3];
    const randIndex = Math.floor(Math.random() * coverArray.length);
    const selectedCover = coverArray[randIndex];

    return (
        <div id="header-container" className="row space-around"  style={{ backgroundImage: `linear-gradient(rgba(80, 61, 47, 0.3), rgba(80, 61, 47, 0.8)), url(${selectedCover})`}} >
            <div id="branding" className="col-xl-4 col-lg-5 col-md-6 col-sx-12">
                <figure>
                    <img src={logo} alt="Logo"></img>
                    <figcaption className="invisible">Weboldal logó</figcaption>
                </figure>
            </div>
            <div id="slogan" className="flex-center col-xl-4 col-lg-5 col-md-6 col-xs-12">
                <h1>{window.BRAND_FULL_NAME}</h1>
                <h2 className="initiale">{window.BRAND_SLOGAN}</h2>
            </div>
        </div>
    )
};


export default Heading;