import Image from "next/image";
import Link from "next/link";
import React from "react";
import config from "../../config/config.json";
import menu from "../../config/menu.json";

const Footer = () => {
  const { socialMedia, footer } = config;
  const { logo } = menu;

  return (
    <div className="container text-center border-t border-borderColor mt-8">
      <div className="flex justify-between items-center  py-8">
        <div className="w-1/3">
          <div className="w-52 h-8 relative">
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="logo"
                layout="fill"
                // objectFit="cover"
              ></Image>
            </Link>
          </div>
        </div>
        <div className="w-1/3">
          <p>
            <span>contact</span>
          </p>
        </div>
        <div className="w-1/3 pl-0">
          {socialMedia.map((i) => (
            <a key={i.icon} className="mr-8">
              <i className={i.icon}></i>
            </a>
          ))}
        </div>
      </div>
      <div className="text-center">
        <p>{footer.copyright}</p>
      </div>
    </div>
  );
};

export default Footer;
