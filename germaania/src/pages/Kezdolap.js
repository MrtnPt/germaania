import React from "react";
import JoHelyen from '../media/images/jo_helyen_l.jpg';
import { IoCheckbox } from "react-icons/io5";

const Home = () => {
  return (
<>
      <article>
        <h2 class='initiale'>Kedves Nyelvtanuló!</h2>
        <p>Üdvözöllek weboldalamon. Itt a helyed, ha</p>
        <div class='row'>
          <div class='col-xl-6 col-md-12'>
            <figure>
              <img class="img-fluid" src={JoHelyen} alt='Jó helyen jársz'></img>
              <figcaption></figcaption>
            </figure>
          </div>
          <div class='col-xl-6 col-md-12'>
            <ul id='checklist' >
              <li><IoCheckbox /> szeretnéd magabiztosan, bátran használni szóban és írásban is a német nyelvet,</li>
              <li><IoCheckbox /> német nyelvterületre költözöl és segítségre van szükséged, hogy ki tudd fejezni magad és megértsd ha hozzád szólnak,</li>
              <li><IoCheckbox /> sikeres érettségi-, nyelvvizsgát szeretnél tenni,</li>
              <li><IoCheckbox /> azt sem tudod, hogy melyik nyelvvizsgát válaszd,</li>
              <li><IoCheckbox /> hobbiszinten szeretnéd elsajátítani a német nyelvet.</li>
            </ul>
          </div>
        </div>
        <p>Segítek neked leküzdeni félelmeidet, hogy merj megszólalni németül, és magabiztosan, gördülékenyen használd a nyelvet!</p>
        <p>Óráimon lendületes és határozott óravezetésre, érthető nyelvtani magyarázatokra, vidám hangulatú órákra számíthatsz, oldott légkörben. Maximálisan figyelek arra, hogy közös munkánk során a legjobbat hozzam ki belőled, hogy bátran és magabiztosan tudj megszólalni németül.</p>
      </article>

</>
  );
};

export default Home;