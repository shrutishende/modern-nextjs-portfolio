
export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experince" },
];

export const gridItems = [
    {
        id: 1,
        title: "I thrive on teamwork, ensuring clear and effective communication with clients ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "images/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "images/grid.svg",
        spareImg: "images/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a Resume Builder Application",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "images/b5.svg",
        spareImg: "images/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];
 
export const projects = [
    {
        id: 1,
        title: "Resume Builder Application",
        des: "An app with AI-powered summary generation and easy creation/download of professional resume PDFs.",
        img: "images/resume-builder.png",
        iconLists: [
            "images/re.svg",
            "images/tail.svg",
            "images/ts.svg",
            "images/nextjs.svg",
        ],
        link: "https://resume-builder-xi-ebon.vercel.app/",
    },
    {
        id: 4,
        title: "Fundook Website",
        des: "Build Fundook website using Next.js and tailwind css",
        img: "images/fundook.png",

        iconLists: [
            "images/re.svg",
            "images/tail.svg",
            "images/ts.svg",
            "images/nextjs.svg",
        ],
        link: "https://fundook.io/",
    },
    {
        id: 2,
        title: "Portfolio Website",
        des: "Build Anjali Bhagwat's portfolio using using Next.js and integrated with slack api",
        img: "images/anjali-bhagwat-portfolio.png",

        iconLists: [
            "images/re.svg",
            "images/tail.svg",
            "images/ts.svg",
            "images/nextjs.svg",
        ],
        link: "https://anjalibhagwat.com/",
    },

    {
        id: 5,
        title: "Ecommerce Applicaation",
        des: "Build and manage your shopping experience with easy login, cart updates, and product browsing via a fake API.",
        img: "images/ecommerce-project.png",

        iconLists: [
            "images/re.svg",
            "images/tail.svg",
            "images/ts.svg",
            "images/nextjs.svg",
        ],
        link: "https://ecommerce-demo-nextjs.vercel.app/",
    },
    {
        id: 3,
        title: "Portfolio Application",
        des: "Build my personal portfolio using Next.js and Tailwind CSS to showcase my projects and skills.",
        img: "images/portfolio-project.png",
        iconLists: [
            "images/re.svg",
            "images/tail.svg",
            "images/ts.svg",
            "images/nextjs.svg",
        ],
        link: "https://nextjs-portfolio-amber-chi.vercel.app",
    },
];

export const techStackImgs = [
    {
        name: "ReactJS",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "NextJS ",
        imgPath: "/images/logos/next.png",
    },
    {
        name: "NodeJS",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "TypeScript",
        imgPath: "/images/logos/ts-logo.png",
    },
    {
        name: "Git",
        imgPath: "/images/logos/git.png",
    },
];



export const workExperience = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Cereble Private Limited | Jan 2024 - Feb 2025",
        desc: [
            "Crafted a responsive site from Figma designs using Next.js, delivering a seamless experience across devices.",
            "Automated workflows with Slack API integration, cutting manual tasks and enhancing team efficiency.",
            "Enhanced user engagement with dynamic Swiper.js sliders and polished Material UI designs.",
            "Streamlined data collection with Formik and Yup, ensuring robust form validation and user trust.",
            "Pioneered CMS and API integrations, making content updates effortless and scalable.",
        ],
        className: "md:col-span-2",
        thumbnail: "images/exp1.svg",
    },
];


export const socialImgs = [
    {
        name: "insta",
        imgPath: "/images/insta.png",
        link: "https://www.instagram.com/shrutishende__/",
    },
    {
        name: "fb",
        imgPath: "/images/fb.png",
        link: "https://www.facebook.com/profile.php?id=100004554796150",
    },
    {
        name: "x",
        imgPath: "/images/x.png",
        link: "https://x.com/shrutishende_",
    },
    {
        name: "linkedin",
        imgPath: "/images/linkedin.png",
        link: "https://www.linkedin.com/in/shrutishende/",
    },
    {
        name: "git",
        imgPath: "/images/git.svg",
        link: "https://github.com/shrutishende",
    },
    {
        name: "medium",
        imgPath: "/images/medium.png",
        link: "https://medium.com/@shrutishende11",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "images/git.svg",
    },
    {
        id: 2,
        img: "images/insta.svg",
    },
    {
        id: 3,
        img: "images/link.svg",
    },
];
