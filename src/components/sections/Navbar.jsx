import { useTranslation } from "react-i18next";
import Link from "../ui/Link";
import Selector from "../ui/Selector";
import { useEffect, useState } from "react";
import Logo from "../../assets/icon.webp"; 

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const changeLanguage = (lng) => i18n.changeLanguage(lng);
    const [scrolled, setScrolled] = useState(false);

     useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
        <div className={` w-full flex justify-between fixed top-2 left-1/2 -translate-x-1/2 z-50 px-2`}>
                {/* Logo */}
                <a href="#top"
                    className={`flex py-2 items-center px-3 font-medium transition-all duration-300 text-white border border-white/0 
                    ${scrolled
                            ? "bg-white/10 backdrop-blur-xl inset-shadow-xs drop-shadow-xl/20 inset-shadow-white rounded-xl border-white/20 hover:bg-white/20"
                            : "bg-transparent md:opacity-0"
                        }`}
                >
                    <img src={Logo} alt="logo" className="w-8 h-8 me-2" />
                    <span className="text-2xl font-bold">KrazyLemon</span>
                </a>

                {/* MENU DESKTOP */}
                <nav
                    className={`hidden md:flex p-2 gap-1 justify-end items-center font-medium transition-all duration-300 text-white border border-white/0
                    ${scrolled
                            ? "bg-white/10 backdrop-blur-xl drop-shadow-lg/20 rounded-xl border-white/20"
                            : "bg-transparent"
                        }`}
                >
                    <Link href="#work">{t("work")}</Link>
                    <Link href="#about">{t("about")}</Link>
                    <Link href="#contact">{t("contact")}</Link>
                    <Selector onChange={changeLanguage} />
                </nav>

                {/* MENU MOVIL */}
                <div className="md:hidden left-2 right-2 top-14 z-50 flex flex-col text-white rounded-xl  bg-white/10 backdrop-blur-xl border border-white/20">
                    <Selector onChange={changeLanguage} />
                </div>
            </div>
    )
}