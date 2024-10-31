import "./Footer.css"
import { FaRegCopyright } from "react-icons/fa";
import aszf from "../media/docs/GerMániaÁSZF.pdf";
import adatved from "../media/docs/GerMániaAdatvédelmiNyilatkozat.pdf"
import { IoDownloadOutline, IoLogoInstagram, IoLogoFacebook } from "react-icons/io5";
const Footer = () => {
    return (
        <div id="footer-container" className="space-around">
            <div id="left" className="col-xl-4">
                <p><a target="_blank" rel="norefferer" href={aszf} title="Általános szerződési feltételek letöltése..."><IoDownloadOutline /> ÁSZF</a></p>
                <p><a target="_blank" rel="norefferer" href={adatved} title="Adatvédelmi nyilatkozat letöltése..." ><IoDownloadOutline /> Adatvédelmi nyilatkozat</a></p>
            </div>
            <div id="center" className="flex-center col-xl-4">
                <p><a target="_blank" rel="norefferer" href="https://www.facebook.com/profile.php?id=61566859437043" title="Facebook | GerMánia"><IoLogoFacebook /></a></p>
                <p><a target="_blank" rel="norefferer" href="https://www.instagram.com/germaniad_hu" title="Instagram | GerMánia"><IoLogoInstagram /></a></p>
            </div>
            <div id="right" className="col-xl-4">
                <p className="copyRight"><span><FaRegCopyright /></span> {new Date().getFullYear()} GerMánia</p>
                <p>Borító képek <a target="_blank" rel="norefferer" href="https://www.pexels.com/photo/cup-of-coffee-on-saucer-414630/">Pixabay</a>, <a target="_blank" rel="norefferer" href="https://www.pexels.com/photo/silver-laptop-and-white-cup-on-table-7974/">Life Of Pix</a> és <a target="_blank" rel="norefferer" href="https://www.pexels.com/photo/open-notebook-near-the-laptop-9969255/">Vlada Karpovich</a> jóvoltából</p>
            </div>
        </div>
    )
};

export default Footer;