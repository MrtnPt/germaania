import React from "react";
import JoHelyen from '../media/images/jo_helyen_l.jpg';

const Home = () => {
  return (
    <article>
      <h1>Kezdőlap</h1>
      <h2>Kedves Nyelvtanuló!</h2>
      <p>Üdvözöllek weboldalamon. Itt a helyed, ha</p>
      <ul>
        <li>szeretnéd magabiztosan, bátran használni szóban és írásban is a német nyelvet,</li>
        <li>német nyelvterületre költözöl és segítségre van szükséged, hogy ki tudd fejezni magad és megértsd ha hozzád szólnak,</li>
        <li>sikeres érettségi-, nyelvvizsgát szeretnél tenni,</li>
        <li>azt sem tudod, hogy melyik nyelvvizsgát válaszd,</li>
        <li>hobbiszinten szeretnéd elsajátítani a német nyelvet.</li>
      </ul>
<div >
        <figure>
          <img class="img-fluid" src={JoHelyen}></img>
          <figcaption></figcaption>
        </figure>
</div>
      <p>Segítek neked leküzdeni félelmeidet, hogy merj megszólalni németül, és magabiztosan, gördülékenyen használd a nyelvet!</p>
      <p>Óráimon lendületes és határozott óravezetésre, érthető nyelvtani magyarázatokra, vidám hangulatú órákra számíthatsz, oldott légkörben. Maximálisan figyelek arra, hogy közös munkánk során a legjobbat hozzam ki belőled, hogy bátran és magabiztosan tudj megszólalni németül.</p>
    </article>
  );
};

export default Home;