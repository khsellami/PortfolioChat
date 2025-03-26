import React from "react";
import Card from "./Card";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
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

const featuresData = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Web Development",
    des: "Crafted Web applications tailored to your needs, ensuring seamless functionality and user satisfaction",
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: "Mobile Development",
    des: "Develop mobile solutions that align with your objectives, delivering a superior user experience",
  },
  {
    id: 3,
    icon: <SiAntdesign />,
    title: "UX Design",
    des: "Elevate user satisfaction with intuitive and visually appealing design solutions for a positive digital experience",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Hosting Websites",
    des: "Reliable and efficient website hosting services to ensure seamless online presence and performance",
  },
];

const featuresDataFr = [
  {
    id: 1,
    icon: <AiFillAppstore />,
    title: "Développement Web",
    des: "Conception d'applications Web adaptées à vos besoins, garantissant une fonctionnalité sans faille et une satisfaction utilisateur",
  },
  {
    id: 2,
    icon: <FaMobile />,
    title: "Développement mobile",
    des: "Développement de solutions mobiles alignées sur vos objectifs, offrant une expérience utilisateur supérieure",
  },
  {
    id: 3,
    icon: <SiAntdesign />,
    title: "Conception UX",
    des: "Augmentation de la satisfaction utilisateur avec des solutions de conception intuitives et visuellement attrayantes pour une expérience numérique positive",
  },
  {
    id: 4,
    icon: <FaGlobe />,
    title: "Hébergement de sites web",
    des: "Services d'hébergement de sites web fiables et efficaces pour assurer une présence en ligne sans faille et des performances optimales",
  },
];

const Services = () => {
  const { i18n } = useTranslation();
  const FeaturesData = i18n.language === "en" ? featuresData : featuresDataFr;
  return (
    <motion.section
      initial="initial"
      whileInView="animate"
      id="Services"
      className="w-full max-w-7xl flex flex-col justify-center items-center "
    >
      <div className=" w-full max-w-7xl grid grid-cols-2 xl:grid-cols-3 max-md:grid-cols-1 gap-6 xl:gap-20 p-[5%]">
        {FeaturesData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
