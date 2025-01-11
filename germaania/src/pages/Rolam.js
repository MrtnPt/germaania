import React from "react";
import TanitPrt from '../media/images/tanit_p.jpg';

import Reviews from '../review/Reviews';

const AboutMe = () => {
  return (
    <>
      <article>
        <h1 className='initiale'>Szeretnék röviden bemutatkozni neked</h1>
        <figure>
          <img className="img-fluid" src={TanitPrt} alt='Tanítok'></img>
        </figure>
        <p>Nyiri-Ménich Nikolettának hívnak. Már középiskolás koromban eldöntöttem, hogy mindenképp olyan dologgal szeretnék a későbbiekben foglalkozni, amit szívvel-lélekkel teszek, és amivel hasznos tudok lenni a társadalom számára. Ezért is döntöttem a tanári pálya mellett. A nyelvtanulás sohasem fejeződik be és mindig tartogat kihívásokat, ezért is élvezem annyira a német nyelv tanítását is.</p>
        <p>A Kodolányi János Egyetem germanisztika szakán kiváló minősítéssel diplomáztam, majd második diplomámat az Eötvös Loránd Tudományegyetem német és nyelv- és beszédfejlesztő tanári szakán szereztem 2012-ben.</p>
        <p>Tanulmányaim végzése közben elkezdtem nyelviskolában tanítani, ahol rengeteg tapasztalatot szereztem a felnőttképzés területén. Sikeresen vezettem mind kezdő, mind közép-, és felsőfokú nyelvvizsgára felkészítő tanfolyamokat.</p>
        <p>A nyelviskolai tanítás után 12 évig a Váci Madách Imre Gimnáziumban oktattam német nyelvet, tanulásmódszertant, illetve 2 éven át kezdő hatha jógaórákat is vezettem.</p>
        <p>Augusztustól pedig vállalkozóként segítek a hozzám fordulóknak eligazodni és magabiztosabbá válni a német nyelv használatában.</p>
      </article>
      <article>
        <h1 className="initiale">Rólam írták</h1>
        <div className="review_container">
          < Reviews />
        </div>
      </article>
    </>
  );
};

export default AboutMe;