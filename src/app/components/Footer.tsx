import React from "react";
import { socialImgs } from "../../../data";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center">
                    <p>Terms & Conditions</p>
                </div>
                <div className="socials">
                    {socialImgs.map((socialImg, index) => (
                        <a key={index} href={socialImg.link} target="_blank">
                            <div className="icon">
                                <Image
                                    src={socialImg.imgPath}
                                    alt="social icon"
                                    width={19}
                                    height={19}
                                />
                            </div>
                        </a>
                    ))}
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        © {new Date().getFullYear()} Shruti Shende. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
