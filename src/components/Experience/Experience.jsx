import React, { useState } from "react";
import { Divider } from "antd";
import { useTranslation } from "react-i18next";
import ExpModal from "../../utils/ExpModal/ExpModal";
import { motion } from "framer-motion";
import { ExpImages, CompanyLogos } from "../../constants";

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

const wordsToHighlight = [
  "React Native",
  "Express/Node.js",
  "Prisma",
  "PostgreSQL",
  "Styled Components",
  "Redux",
  "External APIs",
  "React-query",
  "TypeScript",
  "trpc",
  "frontend",
  "backend",
  "applications",
  "web",
  "mobile",
  "solutions",
  "maintenance",
];

const Experience = () => {
  const { t } = useTranslation();
  const [selectedItem, setSelectedItem] = useState(null);
  const [showMore, setShowMore] = useState({
    experiences: false,
    education: false,
  });

  const experiences = t("experience.positions", {
    returnObjects: true,
  }).reverse();
  const education = t("experience.educationSection", {
    returnObjects: true,
  }).reverse();

  const handleOpenModal = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleShowMore = (type) => {
    setShowMore((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const renderExperienceItems = (items) =>
    items.map((item, index) => (
      <li key={index} className="Education bg-primary dark:bg-whitePrimary">
        <h3 className="text-[17px] max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
          {item.position}
        </h3>
        <h2 className="text-[14px] max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
          {item.duration + " @ " + item.company + "-" + item.contry}
        </h2>
        <p className="text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
          {item.description}
        </p>
        {item.modalContent && (
          <a
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline hover:cursor-pointer"
            onClick={() => handleOpenModal(item)}
          >
            {item.modalContent.readMoreLink}
          </a>
        )}
        <span className="date">{item.year}</span>
        <span className="circle"></span>
      </li>
    ));

  const renderEducationItems = (items) =>
    items.map((item, index) => (
      <li
        key={index}
        className="Education bg-primary dark:bg-whitePrimary drop-shadow-2xl"
      >
        <h3 className="text-[17px] max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
          {item.degree}
        </h3>
        <p className="text-[13px] max-xl:text-[12px] max-md:text-[10px] max-sm:text-[8px] text-gray-200 dark:text-gray-600">
          {item.description}
        </p>
        <span className="date">{item.year}</span>
        <span className="circle"></span>
      </li>
    ));

  return (
    <motion.section
      id="Experience"
      className="relative w-full max-w-7xl flex flex-col justify-center items-center space-y-5 text-White max-md:mb-[200px] my-10"
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        variants={variants}
        className="flex flex-col space-y-12 justify-center items-center w-full max-w-7xl"
      >
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className=" text-primary dark:text-white"
          >
            {t("experience.Experience")}
          </Divider>
        </div>
        <div className="container2 flex justify-center">
          <ul className=" w-[100%] text-white dark:text-primary ">
            {!showMore.experiences
              ? renderExperienceItems([experiences[0]])
              : renderExperienceItems(experiences)}
          </ul>
        </div>
      </motion.div>
      <a
        className="font-medium text-blue-600 dark:text-blue-500 underline hover:cursor-pointer mt-2"
        onClick={() => handleShowMore("experiences")}
      >
        {showMore.experiences
          ? t("experience.ShowLess")
          : t("experience.ShowMore")}
      </a>
      <motion.div
        variants={variants}
        className="flex flex-col justify-center items-center space-y-12 w-full max-w-7xl"
      >
        <div className="w-full px-[5%]">
          <Divider
            style={{ fontWeight: "bold" }}
            className=" text-primary dark:text-white "
          >
            {t("experience.Education")}
          </Divider>
        </div>
        <div className="container2 flex justify-center">
          <ul className="w-full text-white dark:text-primary">
            {!showMore.education
              ? renderEducationItems([education[0]])
              : renderEducationItems(education)}
          </ul>
        </div>
      </motion.div>
      <a
        className="font-medium text-blue-600 dark:text-blue-500 underline hover:cursor-pointer"
        onClick={() => handleShowMore("education")}
      >
        {showMore.education
          ? t("experience.ShowLess")
          : t("experience.ShowMore")}
      </a>
      {selectedItem && (
        <ExpModal
          open={!!selectedItem}
          onClose={handleCloseModal}
          experience={selectedItem}
          wordsToHighlight={wordsToHighlight}
          ExpImages={ExpImages[selectedItem.id]}
          companyLogo={CompanyLogos[selectedItem.id]}
        />
      )}
    </motion.section>
  );
};

export default Experience;
