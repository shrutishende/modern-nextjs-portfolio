"use client";
import React from "react";
import { techStackIcons, techStackImgs } from "../../../data";
import TechIcon from "./Models/TechLogos/TechIcon";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TeckStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );
    });
    return (
        <div id="skills" className="py-20 px-20">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
                How I Can Contribute &
                <span className="text-purple-400"> My Key Skills</span>
            </h1>
            <div className="tech-grid">
                {techStackImgs.map((techStackIcon, index) => (
                    <div
                        key={index}
                        className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                    >
                        <div className="tech-card-animated-bg" />
                        <div className="tech-card-content">
                            <div className="tech-icon-wrapper ">
                                <img src={techStackIcon.imgPath} alt="" />
                            </div>
                            <div className="padding-x w-full">
                                <p>{techStackIcon.name}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TeckStack;
