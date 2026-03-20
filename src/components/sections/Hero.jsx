import { useTranslation } from "react-i18next";
import Button from "../ui/Button";
import banner from "../../assets/img001.avif";
import resume from "../../assets/resume.pdf";
export default function Hero() {

    const { t, i18n } = useTranslation();
    return (
        <div id="top" className="flex justify-center items-center h-screen w-full bg-linear-to-r from-blue-950/40 via-20% via-black/80 to-95% to-red-950/50 relative overflow-hidden ">
                <div className="flex flex-col md:flex-row z-20 w-11/12 md:w-3/4 mx-auto items-center md:items-stretch text-white gap-6">
                    {/* TEXTO */}
                    <div className="flex flex-col justify-between w-full md:pt-4 text-center md:text-left">
                        <div>
                            <h1 className="pt-2 text-lg md:text-3xl font-light">
                                {t("full_stack")}
                            </h1>
                            <h2 className="text-3xl md:text-6xl font-bold pb-3">
                                Angel Velazquez
                            </h2>
                            <Button
                                href={resume}
                                classname="flex mx-auto md:mx-0 w-fit py-2 px-4 rounded-md bg-gray-700 text-white shadow-md hover:bg-gray-800"
                            >
                                {t("resume")}
                            </Button>
                        </div>

                        <h3 className="md:text-3xl font-light pt-4 md:pt-0 text-center md:text-right">
                            {t("slogan")}
                        </h3>

                    </div>

                    {/* IMAGEN */}
                    <img
                        src={banner}
                        alt="banner"
                        className="w-48 md:w-9/12 md:h-[720px] object-cover rounded-xl shadow-xl"
                    />
                </div>
            </div>
    );
} 