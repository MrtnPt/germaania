import React from "react";
import { IoPricetag } from "react-icons/io5";
const Prices = () => {
  return (
    <article>
      <h1 className="initiale">Árak</h1>
      <p> <span className="italic">Egyéni, páros és csoportos</span> óráim közül tudsz választani. Az oktatás <span className="italic">online</span> formában történik. Egy nyelvóra <span className="italic">45 perc</span> időtartamot jelent. A nyelvórán az előzetesen felmért szintnek megfelelő könyvből és a hozzá tartozó munkafüzetből fogunk haladni.</p>
      <p>Az első óránk előtt körülbelül 2 héttel, <span className="italic">a bevezető órán</span> (kb. 25-30 perc) felmérem, hogy milyen szintről indulunk. <span className="italic">A szintfelméréssel egybekötött konzultáció díja ingyenes.</span> Teljesen kezdők esetében természetesen a szintfelmérés elmarad, esetükben csak a konzultációra kerül sor.</p>

      <div className="row">
        <div className="col-xl-4 col-lg-6">
          <div className="pricetag">
            <h2>Egyéni órák</h2>
            <p>7.900,-Ft / 45 perc</p>
            <p>Egyéni órák <span className="bold">heti 2 alkalommal, 45 perces</span> bontásban zajlanak.</p>
            <h4>Kedvezményes csomagok:</h4> 
            <ul>
              <li><IoPricetag />
                10 órás (10x45perc) óracsomag, 10% kedvezménnyel: 71.000,-Ft <span className="italic">(felhasználható 6 hétig)</span>
              </li>
              <li><IoPricetag />
                20 órás (20x45 perc) óracsomag, 15% kedvezménnyel: 134.300,-Ft <span className="italic">(felhasználható 11 hétig)</span>
              </li>
            </ul>
            <p className="italic">Az óracsomagok kifizetése egy összegben történik.</p>
          </div>
        </div>

        <div className="col-xl-4 col-lg-6">
          <div className="pricetag">
            <h2>Páros órák</h2>
            <p>40 órás (20x90 perc) óracsomag: 200.000,-Ft / fő <span className="italic">(felhasználható 10 hétig)</span></p>
            <p>Páros órák <span className="bold">heti 2 alkalommal, 90 percben</span> valósulnak meg.</p>
            <h4>Kedvezmény:</h4>
            <ul><li><IoPricetag />
            <span className="italic">egy összegben történő kifizetésekor</span> 10% kedvezménnyel 180.000,-Ft / fő
            </li></ul> 
            <p className="italic">Páros órák esetén a kifizetés történhet két részletben.</p>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6">
          <div className="pricetag">
            <h2>Csoportos órák</h2>
            <p>40 órás (20x90 perc) óracsomag:	180.000,-Ft / fő <span className="italic">(felhasználható 10 hétig)</span></p>
            <p>Csoportos órák kis létszámban (2-5 fővel) valósulnak meg <span className="bold">heti 2 alkalommal 90 percben</span>.</p>
            <h4>Kedvezmény:</h4>
            <ul>
              <li><IoPricetag />
              <span className="italic">egy összegben történő kifizetésekor</span> 10% kedvezménnyel 162.000,-Ft / fő</li>
           </ul>
            <p className="italic">Csoportos órák esetén a kifizetés történhet két részletben.</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Prices