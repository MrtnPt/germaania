import React from "react";
import TanitLs from '../media/images/tanit_l.jpg';
import { IoCheckbox } from "react-icons/io5";
import { IconContext } from 'react-icons';
import { useMediaQuery } from "react-responsive";

const Home = () => {

  const isMobile = useMediaQuery({ maxWidth: "992px" });

  return (
    <>
      <article className={isMobile ? "row" : ""}>
        <h1 className='initiale'>Kedves Nyelvtanuló!</h1>
        <p>Üdvözöllek weboldalamon. Itt a helyed, ha</p>
        <figure>
          <img className="img-fluid" src={TanitLs} alt='Jó helyen jársz'></img>
          <figcaption></figcaption>
        </figure>
        <ul id='checklist' className={isMobile ? "col-12" : ""}>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckbox /></IconContext.Provider> szeretnéd magabiztosan, bátran használni szóban és írásban is a német nyelvet,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckbox /></IconContext.Provider> német nyelvterületre költözöl és segítségre van szükséged, hogy ki tudd fejezni magad és megértsd ha hozzád szólnak,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckbox /></IconContext.Provider> sikeres érettségi-, nyelvvizsgát szeretnél tenni,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckbox /></IconContext.Provider> azt sem tudod, hogy melyik nyelvvizsgát válaszd,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckbox /></IconContext.Provider> hobbiszinten szeretnéd elsajátítani a német nyelvet.</li>
        </ul>
        <p>Segítek neked leküzdeni félelmeidet, hogy merj megszólalni németül, és magabiztosan, gördülékenyen használd a nyelvet!</p>
        <p>Óráimon lendületes és határozott óravezetésre, érthető nyelvtani magyarázatokra, vidám hangulatú órákra számíthatsz, oldott légkörben. Maximálisan figyelek arra, hogy közös munkánk során a legjobbat hozzam ki belőled, hogy bátran és magabiztosan tudj megszólalni németül.</p>
      </article>

    </>
  );
};

export default Home;