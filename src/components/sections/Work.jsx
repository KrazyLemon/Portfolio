import { useState } from "react";
import { useTranslation } from "react-i18next";
import SlideShow from "../ui/SlideShow";
import Modal from "../ui/Modal";
import img1 from "../../assets/p1.PNG";
import img2 from "../../assets/p2.PNG";
import img3 from "../../assets/p3.PNG";
import img4 from "../../assets/p4.PNG";

 
export default function Work() {

    const [slide, setSlide] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { t } = useTranslation();

     const handleSelectedSlide = (slide) => {
        setSlide(slide);
    };

    const handleModalButton = (e) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }



    return (
        <div id="work" className="flex flex-col justify-center items-center md:w-3/4 w-11/12 h-screen mb-10 mx-auto ">
                <h1 className="text-5xl overflow-hidden py-3 font-bold z-30 text-white">{t("work")}</h1>
                <h2 className="text-xl overflow-hidden font-light pb-2 text-white">{t("work_subtitle")}</h2>
                <div className="h-8/12 md:h-[720px] w-full border border-white/20 bg-white/10 rounded-xl shadow-lg">
                    <SlideShow
                        slides={[
                            {
                                image: img1,
                                title: t("p1_title"),
                                description: t("p1_desc"),
                                technologies: ["React", "Node.js", "Express", "MongoDB"],
                                link: "https://github.com/KrazyLemon/horarios_client.git",
                                bgColor: "bg-cyan-700"
                            },
                            {
                                image: img2,
                                title: t("p2_title"),
                                description: t("p2_desc"),
                                technologies: ["Arduino", "Kotlin", "Firebase", "PHP", "MySQL"],
                                link: "https://github.com/KrazyLemon/VerdeTech.1.0.2.git",
                                bgColor: "bg-lime-700"
                            },
                            {
                                image: img3,
                                title: t("p3_title"),
                                description: t("p3_desc"),
                                technologies: ["HTML", "CSS", "JavaScript"],
                                link: "https://github.com/SevenLife-Sistemas1/seizoNew.git",
                                bgColor: "bg-rose-700",
                            },
                            {
                                image: img4,
                                title: t("p4_title"),
                                description: t("p4_desc"),
                                technologies: ["Java", "Spring Boot", "Spring Security", "MySQL", "Docker"],
                                link: "",
                                bgColor: "bg-yellow-700"
                            },
                        ]}
                        handleSelectedSlide={handleSelectedSlide}
                        handleModalButton={handleModalButton}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen}
                    />
                </div>
                <Modal
                    slide={slide}
                    isModalOpen={isModalOpen}
                    handleModalButton={handleModalButton}
                />
            </div>
    );
}