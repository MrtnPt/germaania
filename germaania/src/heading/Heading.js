import logo from '../media/logo_colored.svg';
import './Heading.css'
const Heading = () => {
    return (
        <div id="header-container" class="row space-around">
            <div id="branding" class="col-xl-4 col-lg-5 col-md-6 col-sx-12">
                <figure>
                    <img src={logo} alt="Logo"></img>
                    <figcaption class="invisible">Weboldal logó</figcaption>
                </figure>
                <h1>{window.BRAND_FULL_NAME}</h1>
            </div>
            <div id="slogan" class="flex-center col-xl-4 col-lg-5 col-md-6 col-xs-12">
                <h2 class="initiale">{window.BRAND_SLOGAN}</h2>
            </div>
        </div>
    )
};

export default Heading;