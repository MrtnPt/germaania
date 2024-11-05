import React from "react";
import { IoMailOutline, IoPersonOutline, IoPhonePortraitOutline, IoReaderOutline, IoInformationCircleOutline } from "react-icons/io5";

const Contact = () => {

  const form = document.querySelector('.contact-form')


  return (
    <article>
      <h1 className="initiale">Kapcsolat</h1>
      <p>Vedd fel velem a kapcsolatot e-mailen vagy töltsd ki az alábbi űrlapot!</p>
      <IoMailOutline /> <a href="mailto:nyirimenich.nikoletta@gmail.com">nyirimenich.nikoletta@gmail.com</a>

      <form id="contact-form"
        action="" method="" >
        <label htmlFor="name-input"><IoPersonOutline />Név*:</label>
        <input id="name-input" type="text" required placeholder="A Teljes Neved"></input>

        <label htmlFor="email-input"><IoMailOutline />E-mail*:</label>
        <input id="email-input" type="email" required placeholder="az.egyik@mukodo.email.cimed.hu"></input>

        <label htmlFor="phone-input"><IoPhonePortraitOutline />Telefonszám:</label>
        <input id="phone-input" type="phone" placeholder="0620-123-4567"></input>

        <label htmlFor="message-input"><IoReaderOutline />Üzenet:</label>
        <textarea id="message-input" type="text" aria-multiline="true" placeholder="ide írd az üzeneted"></textarea>

        <fieldset>
          <legend><IoInformationCircleOutline />Nyelvismeret*:</legend>

          <input id="a1" type="radio" name="level" value="A1"></input>
          <label htmlFor="a1">kezdő (A1)</label>

          <input id="a1a2" type="radio" name="level" value="A1A2"></input>
          <label htmlFor="a1a2">újrakezdő (A1/A2)</label>

          <input id="a2" type="radio" name="level" value="A2"></input>
          <label htmlFor="a2">alapszintű (A2)</label>

          <input id="b1" type="radio" name="level" value="B1"></input>
          <label htmlFor="b1">középhaladó (B1)</label>

          <input id="b2" type="radio" name="level" value="B2"></input>
          <label htmlFor="b2">haladó (B2)</label>

          <input id="c1" type="radio" name="level" value="C1"></input>
          <label htmlFor="c1">felsőfok (C1)</label>

        </fieldset>

        <button type="submit">Küldés</button>
      </form>
    </article>
  );
};

export default Contact;