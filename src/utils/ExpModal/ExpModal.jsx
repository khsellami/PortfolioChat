import React, { useState } from "react";
import { Modal, Image, Skeleton } from "antd";
import { useTranslation } from "react-i18next";
import { highlightWords } from "../utils";

const ExpModal = ({
  open,
  onClose,
  experience,
  wordsToHighlight,
  ExpImages,
  companyLogo,
}) => {
  const { t, i18n } = useTranslation();
  const [loadedImages, setLoadedImages] = useState({});

  const handleImageLoad = (index) => {
    setLoadedImages(prev => ({ ...prev, [index]: true }));
  };

  const handleCloseModal = () => {
    setLoadedImages({});
    onClose();
  }

  return (
    <Modal
      title={experience?.modalContent?.title || ""}
      width={800}
      centered
      open={open}
      footer={null}
      onCancel={handleCloseModal}
    >
      {experience && (
        <>
          <div className="flex w-full flex-row space-x-4">
            <img src={companyLogo} className="w-[40px]" alt="Company Logo" />
            <div className="flex w-full flex-col">
              <h3 className="text-[17px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px] font-bold">
                {experience?.modalContent?.content?.title || ""}
              </h3>
              <div className="w-full flex flex-row justify-between">
                <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                  {experience?.modalContent?.content?.companyName || ""}
                </h3>
                <h3 className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]">
                  {`${experience?.year}`}
                </h3>
              </div>
            </div>
          </div>
          <div className="w-full mt-5 mx-5 flex items-center flex-col">
            <ul className="list-disc px-2">
              {experience?.modalContent?.ExpModalPoints?.map((point, index) => (
                <li
                  key={index}
                  className="text-[16px] text-primary max-xl:text-[14px] max-md:text-[12px] max-sm:text-[10px]"
                >
                  {highlightWords(point, wordsToHighlight)}
                </li>
              ))}
            </ul>
            <div className="w-full mt-5 flex items-center flex-wrap justify-center">
              {ExpImages?.map((img, index) => (
                <div key={index} style={{ margin: '5px' }}>
                  {!loadedImages[index] && <Skeleton.Image active={true} />}
                  <Image
                    src={img}
                    width={100}
                    alt="Experience Image"
                    style={{ display: loadedImages[index] ? 'inline-block' : 'none' }}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ExpModal;