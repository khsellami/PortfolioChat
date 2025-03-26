import { useRef, useState } from "react";
import { message } from "antd";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        formRef.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`
      )
      .then(
        () => {
          message.success("This email is successfully sent");
          formRef.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.section
      id="Contact"
      initial="initial"
      whileInView="animate"
      className="contact w-full max-w-7xl flex flex-row justify-center items-center px-4 my-10"
    >
      <motion.div
        variants={variants}
        className="textContainer w-full text-primary dark:text-white"
      >
        <h1>{t("contact.title")}</h1>
        <div className="item">
          <h2>Email</h2>
          <span>elfagrouchrida21@gmail.com</span>
        </div>
      </motion.div>
      <motion.div variants={variants} className="formContainer w-full">
        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            required
            placeholder={t("contact.name")}
            name="name"
            className="border-2 border-primary dark:border-white dark:text-white"
          />
          <input
            type="email"
            required
            placeholder={t("contact.email")}
            name="email"
            className="border-2 border-primary dark:border-white dark:text-white"
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="border-2 border-primary dark:border-white dark:text-white"
          />
          <button
            type="submit"
            className={` text-white font-bold bg-orange-600 h-10 flex justify-center items-center rounded-md`}
          >
            {t("contact.send")}
          </button>
          {error && "Error"}
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
