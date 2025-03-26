import React from "react";
import {
  TwitterOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";

const socialMediaData = [
  {
    icon: (
      <TwitterOutlined
        style={{ color: "#55acee", fontSize: "2.5rem" }}
        rev={undefined}
        className="max-md:w-[1.5rem]"
      />
    ),
    href: "https://twitter.com/Rida34089360",
  },
  {
    icon: (
      <LinkedinOutlined
        style={{ color: "#0077b5", fontSize: "2.5rem" }}
        rev={undefined}
        className="max-md:w-[1.5rem]"
      />
    ),
    href: "https://www.linkedin.com/in/rida-el-fagrouch-13b566142/",
  },
  {
    icon: (
      <GithubOutlined
        style={{ fontSize: "2.5rem" }}
        rev={undefined}
        className="max-md:w-[1.5rem] dark:text-white"
      />
    ),
    href: "https://github.com/ridaelfagrouch",
  },
];

const SocialMedia = () => {
  return (
      <div className="fixed flex flex-col max-2xl:flex-row max-2xl:space-x-4 justify-center z-50 ">
        <ul className="flex flex-col space-y-4 max-xl:flex-row max-xl:space-x-4 max-xl:space-y-0">
          {socialMediaData.map((item, index) => (
            <li key={index} >
              <a  href={item.href} target="_blank" rel="noopener noreferrer"  >
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
  );
};

export default SocialMedia;
