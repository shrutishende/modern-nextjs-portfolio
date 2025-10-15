import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "../../../lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

const HeroNew = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                {" "}
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="blue"
                />
                <Spotlight
                    className="left-80 top-28 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>

            <div className=" flex h-screen w-full items-center justify-center bg-black absolute top-0 left-0">
                <div
                    className={cn(
                        "absolute inset-0",
                        "[background-size:50px_50px]",  
                        "[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                    )}
                />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] bg-black"></div>
                {/* <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
                    
                </p> */}
            </div>

            <div className="flex justify-center relative my-20 z-10">
                <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
                    <p className="uppercase tracking-widest text-xs text-center text-white max-w-80">
                        Building Seamless Digital Experiences
                    </p>
                    <TextGenerateEffect
                        words="Transforming Concepts into Seamless User Experiences"
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                    />
                    <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
                        Hi! I&apos;m Shruti, a Frontend
                        Developer from Pune, India, with 1+ years of
                        experience building scalable applications. I&apos;m
                        looking for new opportunities where I can contribute to
                        impactful and innovative projects.
                    </p>
                    <div className="flex gap-6">
                        <a href="#projects">
                            <MagicButton
                                title="See my work"
                                icon={null}
                                position=""
                                otherClasses=""
                            />
                        </a>
                        <a
                            href="/Shruti_Shende_Frontend_Developer.pdf"
                            target="_blank"
                        >
                            <MagicButton
                                title="Resume"
                                icon={null}
                                position=""
                                otherClasses=""
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroNew;
