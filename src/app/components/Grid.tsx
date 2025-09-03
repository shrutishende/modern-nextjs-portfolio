import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems } from "../../../data";

const Grid = () => {
    return (
        <section id="about" className="px-20 max-sm:px-5">
            <BentoGrid className="w-full py-20 max-sm:py-16 ">
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                ))}
            </BentoGrid>
        </section>
    );
};

export default Grid;
