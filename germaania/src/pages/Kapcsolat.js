import React from "react";

const Contact = () => {
  return (
    <article>
      <h1 className="initiale">Kapcsolat</h1>
      <p>Vedd fel velem a kapcsolatot e-mailen vagy töltsd ki az alábbi űrlapot!</p>
      E-mail: <a href="mailto:nyirimenich.nikoletta@gmail.com">nyirimenich.nikoletta@gmail.com</a>
      <form id="contact-form" >
        <label for="name-input">Név:</label>
        <input autofocus id="name-input" type="text" required placeholder="a neved" disabled></input>
        <label for="email-input">E-mail:</label>
        <input id="email-input" type="email" required  placeholder="az@email.cimed" disabled></input>
        <label for="phone-input">Telefonszám:</label>
        <input id="phone-input" type="phone" required placeholder="0620-123-4567" disabled></input>
        <label for="message-input">Üzenet:</label>
        <textarea id="message-input" type="text" aria-multiline="true" disabled></textarea>
        <fieldset>
          <legend>Nyelvi szinted</legend>

          <input id="a1" type="radio" name="level" value="A1" disabled></input>
          <label for="a1">kezdő (A1)</label>

          <input id="a1a2" type="radio" name="level" value="A1A2" disabled></input>
          <label for="a1a2">újrakezdő (A1/A2)</label>

          <input id="a2" type="radio" name="level" value="A2" disabled></input>
          <label for="a2">alapszintű (A2)</label>

          <input id="b1" type="radio" name="level" value="B1" disabled></input>
          <label for="b1">középhaladó (B1)</label>

          <input id="b2" type="radio" name="level" value="B2" disabled></input>
          <label for="b2">haladó (B2)</label>
          
          <input id="c1" type="radio" name="level" value="C1" disabled></input>
          <label for="c1">felsőfok (C1)</label>
        </fieldset>
        <button type="submit" disabled>Küldés</button>
      </form>
    </article>
  );
};

export default Contact;