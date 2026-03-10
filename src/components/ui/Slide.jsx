import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Slide({ slide, handleModalButton }) {

    const { t } = useTranslation();
    const { image, title, description, technologies, link, bgColor } = slide;

    return (
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl">
            {/* imagen */}
            <img
                src={image}
                alt="img1"
                className="rounded-xl shadow-2xl w-11/12 md:w-10/12 object-cover top-4 absolute md:static"
            />
            {/* overlay */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-black/80 to-black/0 flex flex-col justify-between p-4 md:p-6">
                {/* botones */}
                <div className="flex w-full justify-end gap-2">
                    {link ? (
                        <a href={link}
                           className="flex rounded-full items-center gap-2 py-2 px-2 text-white
                                    bg-white/10 backdrop-blur-xl hover:bg-white/20 border border-white/10">
                            <Icon icon="iconoir:github" width="24" height="24" />
                        </a>
                    ) : (
                        <span className="flex rounded-full items-center gap-2 py-2 px-2 text-white cursor-not-allowed bg-white/10 backdrop-blur-xl border border-white/10">
                            <Icon icon="iconoir:warning-triangle" width="24" height="24" />
                        </span>
                    )}
                </div>
                {/* contenido */}
                <div className="flex flex-col md:flex-row w-full gap-4 md:items-end justify-between">
                    {/* texto */}
                    <div className="flex flex-col w-full md:w-1/2 text-white gap-2">
                        <h1 className="font-semibold text-2xl md:text-4xl overflow-hidden"> {title} </h1>
                        <p className="font-light text-sm md:text-base text-pretty">{description}</p>
                    </div>
                    {/* tech stack */}
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:text-end">
                        <h3 className="text-white text-sm md:text-xl font-semibold"> {t("tech_stack")}</h3>
                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index) => (
                                <span key={index}
                                    className="bg-white/10 py-1 px-2 text-xs md:text-sm font-light text-white rounded">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}