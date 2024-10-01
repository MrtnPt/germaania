import './Footer.css'
import { FaRegCopyright } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
const Footer = () => {
    return (
        <div id="footer-container" className='space-around'>
            <div className='col-xl-6'>
                <p><a href='#' title='Általános szerződési feltételek letöltése...'><IoDownloadOutline /> ÁSZF</a></p>

                <p><a href='#' title='Adatvédelmi nyilatkozat letöltése...'><IoDownloadOutline /> Adatvédelmi nyilatkozat</a></p>
            </div>
            <div className='flex-center col-xl-6'>
                <p className=''><FaRegCopyright />&nbsp;GerMánia {new Date().getFullYear()}</p>
            </div>


        </div>
    )
};

export default Footer;