import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Button, Modal } from "antd";
import { ExportOutlined } from "@ant-design/icons";
import RidaCv from "../../assets/resume/ridaCv.pdf";
import RidaCvFr from "../../assets/resume/cvRidaFr.pdf";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { fullScreenPlugin } from "@react-pdf-viewer/full-screen";
import "@react-pdf-viewer/full-screen/lib/styles/index.css";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { printPlugin } from "@react-pdf-viewer/print";
import "@react-pdf-viewer/print/lib/styles/index.css";
import { themePlugin } from "@react-pdf-viewer/theme";
import Lottie from "lottie-react";
import animation from "../../assets/lottie_file/Animation_2.json";
import { useTranslation } from "react-i18next";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 10,
    },
  },
};

const textVariants = {
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

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const fullScreenPluginInstance = fullScreenPlugin();
  const newPlugin = defaultLayoutPlugin();
  const printPluginInstance = printPlugin();
  const themePluginInstance = themePlugin();
  const { t, i18n } = useTranslation();

  const MyResume = i18n.language === "en" ? RidaCv : RidaCvFr;

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      id="Home"
      className={`relative w-full  overflow-hidden max-md:mb-[200px]`}
    >
      <div className="max-w-7xl h-full mx-auto flex flex-row justify-between items-center space-x-2 py-5 max-2xl:relative ">
        <motion.div
          variants={textVariants}
          className=" flex flex-col gap-6 py-[10%] max-2xl:justify-center max-2xl:items-center max-2xl:w-full max-sm:gap-3 max-lg:text-center"
        >
          <motion.h1
            variants={textVariants}
            className="dark:text-white text-5xl font-bold max-md:text-4xl max-sm:text-2xl"
          >
            {t("hero.greeting")}
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="text-4xl font-bold text-orange-600 max-md:text-3xl max-sm:text-xl"
          >
            Rida El Fagrouch
          </motion.h1>
          <motion.h1
            variants={textVariants}
            className="dark:text-white text-5xl font-bold max-md:text-4xl max-sm:text-2xl "
          >
            {t("hero.title")}
          </motion.h1>
          <motion.div variants={textVariants}>
            <Button
              type="primary"
              className="w-[200px] h-[50px] text-white text-xl font-bold bg-orange-600 z-10 max-sm:text-lg max-sm:w-[150px] max-sm:h-[40px]"
              icon={<ExportOutlined />}
              onClick={showModal}
            >
              {t("hero.resume")}
            </Button>
          </motion.div>
        </motion.div>
        <motion.div
          variants={textVariants}
          className="w-[50%] max-2xl:absolute max-2xl:w-full "
        >
          <Lottie
            animationData={animation}
            className="w-[100%] max-2xl:z-[-1]  max-2xl:opacity-20"
          />
        </motion.div>
      </div>
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#About">
          <div className="w-[35px] h-[64px] ">
            <div className="chevron"></div>
            <div className="chevron"></div>
            <div className="chevron"></div>
          </div>
        </a>
      </div>
      <motion.div
        className="absolute bottom-[-100px] text-[30vh] whitespace-nowrap max-w-screen dark:text-white  w-[50%] max-xl:w-[130%] max-lg:w-[150] max-md:w-[280%] font-bold opacity-[0.15]"
        variants={sliderVariants}
      >
        {t("hero.animTitle")}
      </motion.div>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        width={1000}
        centered
      >
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
          <Viewer
            fileUrl={MyResume}
            plugins={[
              newPlugin,
              fullScreenPluginInstance,
              printPluginInstance,
              themePluginInstance,
            ]}
          />
        </Worker>
      </Modal>
    </motion.section>
  );
};

export default Hero;
