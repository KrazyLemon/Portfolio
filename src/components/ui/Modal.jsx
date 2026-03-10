import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";

export default function Modal(slide) {
    const { t } = useTranslation();
    const { image, title, description, technologies, link, bgColor } = slide;

    const workContainer = document.getElementById("work");
    if (!workContainer) return null;

    return createPortal(
        <div className="hidden absolute z-40 bg-black/95 w-full h-full transition-color duration-700 p-4 overflow-hidden">
            <div className="w-11/12 h-11/12 mt-20 bg-white/15 m-auto backdrop-blur-xl rounded-2xl shadow-2xl border border-white/10">

            </div>
        </div>
        , workContainer);
}