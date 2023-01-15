import { SelectedPage } from "@/shared/types";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png";
import HText from "@/shared/HText";
import ActionButton1 from "@/shared/ActionButton1";

const inputStyles = `w-full rounded-lg bg-black-60 px-5 py-3 placeholder-white mb-5`;

type Props = { setSelectedPage: (value: SelectedPage) => void };

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();
  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <section id="contactos" className=" min-h-full bg-black-90 py-24">
      <div className="mx-auto w-5/6 ">
        <motion.div
          onViewportEnter={() => setSelectedPage(SelectedPage.Contactos)}
        >
          {/* HEADER */}
          <motion.div
            className="md:w-3/5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 70 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              <span className="text-purple-lighter1">JUNTA-TE A NÓS </span>E
              COMEÇA HOJE A DANÇAR
            </HText>
          </motion.div>
          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
              className="mt-10 basis-3/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <form
                action="https://formsubmit.co/53a77ecb85a9abdb7877b2055f7ced29"
                target="_blank"
                onSubmit={onSubmit}
                method="POST"
              >
                {errors.name && (
                  <p className="mb-1 text-purple-lighter1">
                    {errors.name.type === "required" &&
                      "Este campo necessita de ser preenchido."}
                    {errors.name.type === "maxLength" &&
                      "Este campo ultrapassa os 50 caracteres permitidos."}
                  </p>
                )}
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="NOME"
                  {...register("name", { required: true, maxLength: 50 })}
                />{" "}
                <select
                  className={`${inputStyles} text-light`}
                  {...register("option", { required: true })}
                >
                  <option value="" disabled selected hidden>
                    ESCOLHE UM ASSUNTO
                  </option>
                  <option className="" value="female">
                    AULAS DE DANÇA
                  </option>
                  <option value="male">CASAMENTOS</option>
                  <option value="other">EVENTOS</option>
                  <option value="female">OUTRO </option>
                </select>{" "}
                {errors.email && (
                  <p className="mb-1 text-purple-lighter1">
                    {errors.email.type === "required" &&
                      "Este campo necessita de ser preenchido."}
                    {errors.email.type === "pattern" &&
                      "O Email inserido não é válido."}
                  </p>
                )}
                <input
                  className={inputStyles}
                  type="text"
                  placeholder="EMAIL"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  })}
                />
                {errors.message && (
                  <p className="mb-1 text-purple-lighter1">
                    {errors.message.type === "required" &&
                      "Este campo necessita de ser preenchido."}
                    {errors.message.type === "maxLength" &&
                      "Este campo ultrapassa os 2000 caracteres permitidos."}
                  </p>
                )}
                <textarea
                  className={inputStyles}
                  placeholder="MENSAGEM"
                  rows={4}
                  cols={50}
                  {...register("message", { required: true, maxLength: 2000 })}
                />
                <button
                  type="submit"
                  className="rounded-md bg-gradient-to-tl  from-blue-darker to-purple-darker1 bg-size-200 bg-pos-0 px-10 py-2 text-white transition-all duration-500 hover:bg-pos-100 "
                >
                  Enviar
                </button>
              </form>
            </motion.div>
            <motion.div
              className="relative mt-16 basis-2/5 md:mt-0"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 1 }}
              variants={{
                hidden: { opacity: 0, x: 70 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
                <img
                  className="w-full"
                  src={ContactUsPageGraphic}
                  alt="contact-us-page-graphic"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
