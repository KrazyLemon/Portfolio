import { useState } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import { useTranslation } from "react-i18next";


export default function ContactForm() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const captha = "6LeHbb4rAAAAAC6NtCVXU73NED2A21YeXIQEec9V";
    const [captchaValue, setCaptchaValue] = useState(null);

    const { t } = useTranslation();

    const sendEmail = (e) => {
        e.preventDefault();

        const form = e.target;
        const nombre = form.nombre.value.trim();
        const email = form.email.value.trim();
        const mensaje = form.mensaje.value.trim();

        // 🔹 Validación simple
        if (!nombre || !email || !mensaje) {
            setStatus("Todos los campos son obligatorios");
            return;
        }
        if (!captchaValue) {
            setStatus("Por favor verifica el captcha");
            return;
        }

        // Validar email básico
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus("Ingresa un correo válido");
            return;
        }

        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_xdmdj3g",   // 🔹 reemplaza con tu service id
                "template_kiydfoo",  // 🔹 reemplaza con tu template id
                form,
                "fB6eBZ1RQb8jqjzwY"    // 🔹 reemplaza con tu public key
            )
            .then(() => {
                setStatus("¡Mensaje enviado con éxito!");
                form.reset();
                window.grecaptcha.reset(); // Resetear el captcha
            })
            .catch((err) => {
                setStatus("Error al enviar: " + err.text);
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form onSubmit={sendEmail} className="flex flex-col gap-3 w-full p-4 border border-white/20 bg-white/10 text-white  rounded-xl">
            <h2 className="text-xl font-semibold text-center">{t("contact")}</h2>
            <input
                type="text"
                name="nombre"
                placeholder={t("name_placeholder")}
                className="border border-white/20 p-2 rounded-xl text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
                type="email"
                name="email"
                placeholder={t("email_placeholder")}
                className="border border-white/20 p-2 rounded-xl text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
                name="mensaje"
                placeholder={t("message_placeholder")}
                rows="4"
                className="h-2/6 border border-white/20 p-2 rounded-xl text-white  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ReCAPTCHA
                sitekey={captha}   // cambia por tu clave pública
                onChange={setCaptchaValue}
                className="p-2 flex justify-center items-center"
            />
            <button
                type="submit"
                disabled={loading}
                className={`p-2 rounded-xl bg-white/10 border border-white/20  ${loading
                    ? " cursor-not-allowed"
                    : " cursosr-pointer hover:bg-white/30"
                    }`}
            >
                {loading ? "Enviando..." : "Enviar"}
            </button>

            {status && (
                <p
                    className={`text-sm text-center mt-2 ${status.startsWith("✅")
                        ? "text-green-600"
                        : "text-red-600"
                        }`}
                >
                    {status}
                </p>
            )}
        </form>
    );
}

