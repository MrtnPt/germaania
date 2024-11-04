import React from "react";

const Contact = () => {
  return (
    <article>
      <h1 className="initiale">Kapcsolat</h1>
      <p>Vedd fel velem a kapcsolatot e-mailen vagy töltsd ki az alábbi űrlapot!</p>
      E-mail: <a href="mailto:nyirimenich.nikoletta@gmail.com">nyirimenich.nikoletta@gmail.com</a>

      <form id="contact-form">
        <label for="name-input">Név:</label>
        <input id="name-input" type="text" required placeholder="a neved"></input>
        <label for="email-input">E-mail:</label>
        <input id="email-input" type="email" required placeholder="az@email.cimed"></input>
        <label for="phone-input">Telefonszám:</label>
        <input id="phone-input" type="phone" placeholder="0620-123-4567"></input>
        <label for="message-input">Üzenet:</label>
        <textarea id="message-input" type="text" aria-multiline="true" placeholder="ide írd az üzeneted"></textarea>

        <fieldset>
          <legend>Nyelvismeret</legend>
          <input id="a1" type="radio" name="level" value="A1"></input>
          <label for="a1">kezdő (A1)</label>
          <input id="a1a2" type="radio" name="level" value="A1A2"></input>
          <label for="a1a2">újrakezdő (A1/A2)</label>
          <input id="a2" type="radio" name="level" value="A2"></input>
          <label for="a2">alapszintű (A2)</label>
          <input id="b1" type="radio" name="level" value="B1"></input>
          <label for="b1">középhaladó (B1)</label>
          <input id="b2" type="radio" name="level" value="B2"></input>
          <label for="b2">haladó (B2)</label>
          <input id="c1" type="radio" name="level" value="C1"></input>
          <label for="c1">felsőfok (C1)</label>

        </fieldset>

        <button type="submit">Küldés</button>
      </form>
    </article>
  );
};

export default Contact;