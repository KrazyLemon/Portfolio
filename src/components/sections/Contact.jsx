import { useTranslation } from "react-i18next";
import ContactForm from "../ui/ContactForm";
import Banner from "../../assets/banner.webp";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <div id="contact" className="flex flex-col h-screen justify-center w-11/12 md:w-3/4 items-center mx-auto ">
            <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white " >{t("contact")}</h1>
            <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white   ">{t("contact_subtitle")}</h2>
            <div className="flex ">
                <ContactForm />
                <div className="h-8 ">
                    {/* Spacer div to create gap between form and image */}
                </div>
                <div className="hidden md:flex ms-8">
                    <img src={Banner} alt="contact" className="h-[600px] object-cover rounded-xl shadow-lg " />
                </div>
            </div>
        </div>
    )
}