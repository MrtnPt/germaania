import React from "react";

const Prices = () => {
  return (
    <article>
      <h1>Árak</h1>
      <p> Egyéni és csoportos óráim közül tudsz választani. Az oktatás online formában történik. Egy nyelvóra 45 perc időtartamot jelent. A nyelvórán az előzetesen felmért szintnek megfelelő könyvből és a hozzá tartozó munkafüzetből fogunk haladni.</p>
      <p>Az első óránk előtt körülbelül 2 héttel, a bevezető órán (kb. 25-30 perc) felmérem, hogy milyen szintről indulunk. A szintfelméréssel egybekötött konzultáció díja ingyenes. Teljesen kezdők esetében természetesen a szintfelmérés elmarad, esetükben csak a konzultációra kerül sor.</p>

      <section className="col-xxl-6 col-md-12">
        <h2>Az egyéni órákról</h2>
        <h3>Árak</h3>
        <div className="pricetag">
          <p>6.890,-Ft / 45 perc</p>
          <p>Egyéni órák heti 2 alkalommal 45 perces bontásban zajlanak.</p>
        </div>
        <p>Kedvezményes óracsomagok vásárlására is van lehetőség. Az óracsomagok
          kifizetése egy összegben történik.</p>
        <ul>
          <li>
            10 órás óracsomag (10x45perc) - 10% kedvezménnyel: 62.000,-Ft
            <ul>
              <li>az óracsomag érvényességi ideje: 5 hét</li>
            </ul>
          </li>
          <li>
            20 órás óracsomag (20x45 perc) – 15% kedvezménnyel: 117.130,-Ft
            <ul>
              <li>az óracsomag érvényességi ideje: 10 hét</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="col-xxl-6 col-md-12">
        <h2>A csoportos órákról</h2>
        <h3>Árak</h3>
        <div className="pricetag">
          <ul>
            <li>40 órás óracsomag – (20x90perc):	160.000,-Ft
              <ul>
                <li>az óracsomag érvényességi ideje: 10 hét</li>
              </ul>
            </li>
          </ul>
        </div>
        <p>Csoportos órák kis létszámban - minimum 2, maximum 5 fővel - valósulnak meg heti 2 alkalommal 90 percben.</p>
        <p>Csoportos órák esetén a kifizetés történhet két részletben.</p>
        <p>40 órás csoportos óra egy összegben történő kifizetésekor 10% kedvezményt biztosítok a végösszegből, így a 40 órás óracsomag ára: 144.000,-Ft</p>
      </section>
    </article>
  );
};

export default Prices