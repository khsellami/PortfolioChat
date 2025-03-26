import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { projects, projectsFr } from "../../constants";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const variants = {
  initial: {
    x: -300,
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

const Works = () => {
  return (
    <div className="w-full px-[5%]">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const { t, i18n } = useTranslation();
  const Projects = i18n.language === "en" ? projects : projectsFr;

  return (
    <section id="Works" ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0  flex flex-col justify-center items-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          className="sticky top-0  max-w-[85%]  max-lg:max-w-[100%] flex h-screen items-center  overflow-hidden"
        >
          <motion.div style={{ x }} className="flex gap-4">
            {Projects.map((card, index) => {
              return <MyCard card={card} key={index} />;
            })}
          </motion.div>
        </motion.div>
        <div className="absolute w-full xs:bottom-10 bottom-[200px] max-md:bottom-[100px] flex justify-center items-center">
          <a href="#Services">
            <div className="w-[35px] h-[64px] ">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

const MyCard = ({ card }) => {
  return (
    <div
      key={card.key}
      className="relative w-[250px]  max-md:w-[200px] h-[350px]  overflow-hidden rounded-md bg-whitePrimary transition-transform ease-in-out  border-2 border-primary dark:border-white overflow-y-hidden"
    >
      <motion.div variants={variants} className="card">
        <div className="box1">
          <div className="w-full h-full">
            <img src={card.image} className="w-full h-full object-fill" />
          </div>
          <div className="content1 opacity-95 flex flex-col space-y-4">
            <h3 className="text-md font-bold text-center max-lg:text-sm max-md:text-[12px]">
              {" "}
              {card.name}{" "}
            </h3>
            <p className="text-[13px] max-md:text-[10px]">
              {" "}
              {card.description}
            </p>
            <div className="flex flex-col space-y-2">
              <h3 className="text-md font-bold  max-lg:text-sm max-md:text-[12px]">
                {" "}
                Tech:{" "}
              </h3>
              <div className="w-full h-full grid grid-cols-6 justify-center items-center">
                {card.tech.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={item.icon}
                      className="w-[35px] max-lg:w-[25px] max-md:w-[15px] hover:scale-125 transition ease-in-out"
                    />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-row space-x-2 text-md max-lg:text-sm max-md:text-[12px]  font-bold ">
              <ArrowRightOutlined />
              <a
                href={card.source_code_link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition ease-in-out"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Works;
