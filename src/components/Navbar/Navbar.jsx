import React, { useState, useEffect } from "react";
import { styles } from "../../styles";
import { navLinks, navLinksFr } from "../../constants";
import { menu, close, close_light, menu_light } from "../../assets";
import { Button } from "antd";
import { motion } from "framer-motion";
import DarkMode from "../DarkMode/DarkMode";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const NavLinks = i18n.language === "en" ? navLinks : navLinksFr;
  const [active, setActive] = useState(NavLinks[0].id);
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const Close = theme === "light" ? close_light : close;
  const Menu = theme === "light" ? menu_light : menu;

  const handleNavLinkClick = (title) => {
    setToggle(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      for (const link of NavLinks) {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActive(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full h-[80px] flex justify-between items-center fixed top-0 left-0 z-50  bg-shadow-xl backdrop-blur-xl `}
    >
      <div class="absolute inset-0 h-full w-full bg-white dark:bg-primary bg-[linear-gradient(to_right,#80808012_2px,transparent_1px),linear-gradient(to_bottom,#80808012_2px,transparent_1px)] bg-[size:30px_30px]" />

      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ul className="list-none hidden xl:flex flex-row gap-10">
          {NavLinks.map((link, idx) => (
            <li key={idx} onClick={() => handleNavLinkClick(link.title)}>
              <a
                href={`#${link.id}`}
                className="relative text-xl  dark:text-white font-bold cursor-pointer"
              >
                {active === link.id ? (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full top-6"
                  />
                ) : null}
                {link.title != "Contact" ? link.title : ""}
              </a>
            </li>
          ))}
          <Button
            type="primary"
            className={` text-white font-bold bg-orange-600  ${
              active === "Contact"
                ? "border-2 border-primary dark:border-white"
                : ""
            } `}
            href="#Contact"
            onClick={() => handleNavLinkClick("Contact")}
          >
            {t("navbar.contactMe")}
          </Button>
        </ul>
        <div className="flex flex-row gap-5 justify-center items-center">
          <DarkMode theme={theme} setTheme={setTheme} />
          <LanguageSwitcher />
        </div>

        <div className="z-50 xl:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? Close : Menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={` ${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-primary dark:bg-whitePrimary`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {NavLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.id
                      ? "text-white dark:text-primary border-b-2 border-orange-500"
                      : "text-secondary"
                  } hover:text-white dark:hover:text-primary text-[18px] font-medium cursor-pointer `}
                  onClick={() => handleNavLinkClick(link.id)}
                >
                  {link.title != "Contact" && (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
              <Button
                type="primary"
                className={` text-white font-bold bg-orange-600  ${
                  active === "Contact" ? "border-2 border-white" : ""
                }`}
                href="#Contact"
                onClick={() => handleNavLinkClick("Contact")}
              >
                {t("navbar.contactMe")}
              </Button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
