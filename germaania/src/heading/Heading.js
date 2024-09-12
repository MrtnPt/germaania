import logo from '../media/logo_colored.svg';
const APP_NAME = "GerMánia";

const Heading = () => {
    return (
        <div className='col-12'>
            <figure class="col-md-12 col-lg-3 col-xl-2">
                <img class="img-fluid" src={logo} alt="Logo"></img>
                <figcaption class="invisible">Weboldal logó</figcaption>
            </figure>
            <h1>{APP_NAME}</h1>
        </div>
    )
};

export default Heading;