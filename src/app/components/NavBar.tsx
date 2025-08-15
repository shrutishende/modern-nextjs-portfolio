"use client";
import React, { useEffect, useState } from "react";
import { navItems } from "../../../data";

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(true);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
            <div className="inner">
                <a href="#" className="logo">
                    Shruti Shende
                </a>
                <nav className="desktop">
                    <ul>
                        {navItems.map((item) => (
                            <li key={item.name} className="group">
                                <a href={item.link}>
                                    <span>{item.name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href="#" className="contact-btn group">
                    <div className="inner">
                        <span>Contact Me</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;
