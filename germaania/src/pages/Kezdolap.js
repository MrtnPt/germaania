import React from "react";
import TanitLs from '../media/images/tanit_l.jpg';
import { IoCheckboxOutline } from "react-icons/io5";
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
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckboxOutline /></IconContext.Provider> szeretnéd magabiztosan, bátran használni szóban és írásban is a német nyelvet,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckboxOutline /></IconContext.Provider> német nyelvterületre költözöl és segítségre van szükséged, hogy ki tudd fejezni magad és megértsd, amikor hozzád szólnak,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckboxOutline /></IconContext.Provider> sikeres érettségi-, nyelvvizsgát szeretnél tenni,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckboxOutline /></IconContext.Provider> azt sem tudod, hogy melyik nyelvvizsgát&nbsp;válaszd,</li>
          <li><IconContext.Provider value={{ className: "react-icons" }}><IoCheckboxOutline /></IconContext.Provider> hobbiszinten szeretnéd elsajátítani a német&nbsp;nyelvet.</li>
        </ul>

        <p>Jól tudom én is, hogy nem egyszerű dolog aktívan, szóban használni egy idegennyelvet. Élénken emlékszem még saját életemből azokra a pillanatokra, amikor Ausztriában, Németországban, Svájcban, anyanyelvi környezetben kellett először megszólalnom németül. Vagy azokra, amikor vizsgaszituációban, abban a néhány percben kellett megmutatnom, hogy mit is tudok. Drukk alatt sokszor nehezen találjuk fel magunkat, és még azt is képesek vagyunk elfelejteni, amit addig tudtunk. A jó hír az, hogy a kommunikációs készség fejleszthető és én maximálisan azon leszek közös munkánk során, hogy elhidd magadról, hogy neked is sikerülni fog, amit elterveztél a német nyelvvel kapcsolatban!</p>

        <p>Tanulj velem és segítek leküzdeni félelmeidet, hogy merj megszólalni németül, és magabiztosan, gördülékenyen tudd kifejezni magad!</p>

        <p>Segítek neked leküzdeni félelmeidet, hogy merj megszólalni németül, és magabiztosan, gördülékenyen használd a nyelvet!</p>
        <p>Óráimon lendületes és határozott óravezetésre, érthető nyelvtani magyarázatokra, vidám hangulatú órákra számíthatsz, oldott légkörben. Maximálisan figyelek arra, hogy közös munkánk során a legjobbat hozzam ki belőled, hogy bátran és magabiztosan tudj megszólalni németül.</p>
      </article>

    </>
  );
};

export default Home;