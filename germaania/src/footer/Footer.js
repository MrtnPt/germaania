import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa";
import aszf from "../media/docs/GerMániaÁSZF.pdf";
import adatved from "../media/docs/GerMániaAdatvédelmiNyilatkozat.pdf"
import { IoDownloadOutline, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
const Footer = () => {
    return (
        <div id="footer-container" className="row space-around">
            <div id="left" className="col-xl-4 col-md-12">
                <p><a target="_blank" rel="noreferrer" href={aszf} title="Általános szerződési feltételek letöltése..."><IoDownloadOutline /> ÁSZF</a></p>
                <p><a target="_blank" rel="noreferrer" href={adatved} title="Adatvédelmi nyilatkozat letöltése..." ><IoDownloadOutline /> Adatvédelmi nyilatkozat</a></p>
            </div>
            <div id="center" className="col-xl-4 col-md-12">
                <p>Kövess itt is: </p>
                <p><a target="_blank" rel="noreferrer" href="https://www.facebook.com/profile.php?id=61566859437043" title="Facebook | GerMánia"><IoLogoFacebook /></a></p>
                <p><a target="_blank" rel="noreferrer" href="https://www.instagram.com/germaniad_hu" title="Instagram | GerMánia"><IoLogoInstagram /></a></p>
            </div>
            <div id="right" className="col-xl-4 col-md-12">
                <p>Borító képek&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://www.pexels.com/photo/cup-of-coffee-on-saucer-414630/">Pixabay</a>,&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://www.pexels.com/photo/silver-laptop-and-white-cup-on-table-7974/">Life Of Pix</a> és&nbsp;
                    <a target="_blank" rel="noreferrer" href="https://www.pexels.com/photo/open-notebook-near-the-laptop-9969255/">Vlada Karpovich</a> jóvoltából
                </p>
                <p className="copyRight">COPYRIGHT&nbsp;<span><FaRegCopyright /></span> {new Date().getFullYear()} GerMánia</p>
            </div>
        </div>
    )
};

export default Footer;