import { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTranslation } from "react-i18next";
import Img2 from "../../assets/img003.jpg";

export default function About() {
    const [isFullDescriptionHidden, setIsFullDescriptionHidden] = useState(true);
    const descRef = useRef(null);
    const [maxH, setMaxH] = useState('4.5rem');
    const { t } = useTranslation();

    const HandleDescriptionIsHidden = (val) => {
        if (typeof val === "boolean") setIsFullDescriptionHidden(val);
        else setIsFullDescriptionHidden((prev) => !prev);
    };


    useEffect(() => {
        if (!descRef.current) return;
        setMaxH(isFullDescriptionHidden ? '4.5rem' : `${descRef.current.scrollHeight}px`);
    }, [isFullDescriptionHidden]);


    return (
        <div id="about" className="flex flex-col justify-center items-center w-11/12 md:w-3/4 md:h-screen  mx-auto ">
            <h1 className="text-5xl overflow-hidden py-3 font-bold z-40 text-white">{t("about")}</h1>
            <h2 className="text-xl overflow-hidden font-light text-center pb-2 text-white ">{t("about_subtitle")}</h2>
            <div className="flex flex-col md:flex-row w-full gap-4">
                {/* About Me Izq */}
                <div className="relative h-130 w-full md:w-1/3 md:h-full bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white flex flex-col items-end">
                    <img src={Img2} alt="foto" className="p-2 rounded-2xl shadow-lg object-cover w-full h-full" />
                    <form className="absolute w-full h-full p-4 flex flex-col items-center justify-end  bg-linear-to-t from-black/90 to-black/0 rounded-2xl">
                        {
                            isFullDescriptionHidden ? (
                                <button
                                    type="button"
                                    onClick={() => HandleDescriptionIsHidden(false)}
                                    className="cursor-pointer z-40 mb-2 border border-white/20 
                                            rounded-full p-2 bg-white/10 hover:bg-white/20 transition-all duration-500 flex items-center justify-center"
                                >
                                    <Icon icon="mdi-light:chevron-double-down" width="24" height="24" className="animate-pulse" />
                                </button>) : (
                                <button
                                    type="button"
                                    onClick={() => HandleDescriptionIsHidden(true)}
                                    className="cursor-pointer z-40 mb-2 border border-white/20 
                                            rounded-full p-2 bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center overflow-hidden"
                                >
                                    <Icon icon="mdi-light:chevron-double-up" width="24" height="24" className="animate-pulse" />
                                </button>
                            )
                        }
                        <p
                            ref={descRef}
                            className="p-2 text-pretty text-sm font-light md:text-lg"
                            style={{
                                maxHeight: maxH,
                                overflow: 'hidden',
                                transition: 'max-height 500ms ease'
                            }}
                        >
                            {t("about_desc")}
                        </p>
                    </form>
                </div>
                {/* About Me Der */}
                <div className="h-full w-full md:w-full p-2 bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white items-end">
                    <div className="w-full h-fit p-4 flex flex-col">
                        <h1 className="w-full font-semibold flex justify-center md:justify-end text-2xl md:text-3xl text-white">
                            {t("education")}
                        </h1>
                        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                            <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                <Icon icon="mdi:school" width={24} height={24} />
                                <h4 className="font-semibold text-sm md:text-md">{t("degree_1")}</h4>
                                <p className="text-xs opacity-80">{t("school_1")}</p>
                            </li>

                            <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                <Icon icon="mdi:school" width={24} height={24} />
                                <h4 className="font-semibold text-sm md:text-md">{t("degree_3")}</h4>
                                <p className="text-xs opacity-80">{t("school_2")}</p>
                            </li>

                            <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                <Icon icon="mdi:school" width={24} height={24} />
                                <h4 className="font-semibold text-sm md:text-md">{t("degree_5")}</h4>
                                <p className="text-xs opacity-80">{t("school_3")}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full h-fit p-4 flex flex-col">
                        <h1 className="w-full font-semibold flex justify-center text-2xl md:text-3xl text-white">
                            {t("certifications")}
                        </h1>
                        <ul className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                            <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                <Icon icon="mdi:certificate" width={24} height={24} />
                                <h4 className="font-semibold text-sm md:text-md">{t("course_1")}</h4>
                                <p className="text-xs opacity-80">{t("school_4")}</p>
                            </li>

                            <li className="bg-white/10 backdrop-blur-xl border border-white/10 shadow-lg rounded-2xl text-white p-4 flex flex-col gap-1">
                                <Icon icon="mdi:certificate" width={24} height={24} />
                                <h4 className="font-semibold text-sm md:text-md">{t("course_2")}</h4>
                                <p className="text-xs opacity-80">{t("school_4")}</p>
                            </li>
                        </ul>
                    </div>
                    <h1 className="w-full font-semibold p-4 flex justify-center text-2xl md:text-3xl text-white">{t("skills")}</h1>
                    <h4 className="w-full mx-auto justify-start my-1 hidden text-xl overflow-hidden px-4 md:flex ">Backend</h4>
                    <ul className="w-full h-fit px-4 grid grid-cols-2 md:grid-cols-8 gap-2">
                        <li className="bg-white/10 backdrop-blur-xl border col-span-3 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">{t("progamming")}</h6>
                            <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:java-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">Java</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:python-dark" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">Python</h4>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:cpp" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">C++</h4>
                                </div>
                            </div>
                        </li>
                        <li className="bg-white/10 backdrop-blur-xl border col-span-3 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">Backend</h6>
                            <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:spring-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">Spring Boot</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:fastapi" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">FastAPI</h4>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:expressjs-dark" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">Express JS</h4>
                                </div>
                            </div>
                        </li>
                        <li className="bg-white/10 backdrop-blur-xl border col-span-3 md:col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">DB's</h6>
                            <div className="flex justify-around items-center">
                                <div>
                                    <Icon icon="skill-icons:postgresql-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">PostgreSQL</h6>
                                </div>
                                <div>
                                    <Icon icon="skill-icons:mongodb" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">MongoDB</h4>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="w-full mx-auto justify-around my-1 hidden text-xl overflow-hidden px-4 md:flex " >
                        <h4>Frontend</h4>
                        <h4>CI / CD</h4>
                    </div>
                    <ul className="w-full h-fit p-2 px-4 md:pt-0 grid grid-cols-2 md:grid-cols-8 gap-2">
                        <li className="bg-white/10 backdrop-blur-xl border col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">Frontend</h6>
                            <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:react-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">React JS</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:angular-dark" width={36} height={36} />
                                    <h4 className="md:flex justify-center text-xs pt-1 hidden">Angular</h4>
                                </div>
                            </div>
                        </li>
                        <li className="bg-white/10 backdrop-blur-xl border col-span-2 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">Tools</h6>
                            <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:github-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">GitHub</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:postman" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">Postman</h6>
                                </div>
                            </div>
                        </li>
                        <li className="bg-white/10 backdrop-blur-xl border col-span-4 border-white/10 shadow-lg rounded-2xl text-white p-2 ">
                            <h6 className="text-sm font-light mb-1">CI/CD</h6>
                            <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:docker" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">Docker</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:kubernetes" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">Kubernetes</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:aws-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">AWS</h6>
                                </div>
                                <div className="flex flex-col items-center">
                                    <Icon icon="skill-icons:gcp-dark" width={36} height={36} />
                                    <h6 className="md:flex justify-center text-xs pt-1 hidden">GCP</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>)
}