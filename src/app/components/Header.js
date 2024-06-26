"use client";
import Image from "next/image";
import React, { useState } from "react";
import AngelyLogo from "../assets/SkailiLogo.png";
import "./components.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Translator from "./Translator";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <Translator>
      {(translations) => (
        <section className="header__section">
          <Image alt="logo" src={AngelyLogo} className="Skaili__logo" />
          <div className="header__elements__div">
            <a className="footer__links__span" href="#services__section">
              {translations.headerelement1}
            </a>
            <a href="#process__section" className="footer__links__span">
            {translations.headerelement2}
            </a>
            <a className="footer__links__span" href="#questions__section">
            {translations.headerelement3}
            </a>
          </div>
          <Link href="/contact" className="header__contact__button">
            {translations.contactbutton}
          </Link>
          <button className="header__nav__toggle-button">
            <input
              type="checkbox"
              id="checkbox"
              value={toggleMenu}
              onClick={() => setToggleMenu((prev) => !prev)}
            />
            <label for="checkbox" class="toggle">
              <div class="bars" id="bar1"></div>
              <div class="bars" id="bar2"></div>
              <div class="bars" id="bar3"></div>
            </label>
          </button>
          {toggleMenu ? (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="header__toggle__menu__div"
            >
              <div>
                <a href="#services__section">{translations.headerelement1}</a>
                <a href="#process__section">{translations.headerelement2}</a>
                <a href="#questions__section">{translations.headerelement3}</a>
                <Link href={"/contact"} className="header__toggle__menu__login">
                {translations.contactbutton}
                </Link>
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </section>
      )}
    </Translator>
  );
}

export default Header;
