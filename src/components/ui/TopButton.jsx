import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function TopButton() {

    const [scrolled, setScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);



    return (
        <a href="#top" className={`fixed text-white bottom-5 right-5 p-2 rounded-full bg-white/10 backdrop-blur-xl shadow-lg transition-opacity duration-300 hover:bg-white/20 border border-white/0 
            ${scrolled ? "opacity-100 border-white/20" : "opacity-0 pointer-events-none"}
        `}>
            <Icon icon="mdi-light:chevron-up" width="32" height="32" />
        </a>
    );
}