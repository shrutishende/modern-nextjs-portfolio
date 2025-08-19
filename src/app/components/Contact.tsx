"use client";
import React, { useRef, useState } from "react";
import ContactExperience from "./Models/contact/ContactExperince";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("form", form);
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.log("EmailJS Error:", error);
        } finally {
            setLoading(false);
        }
    };
    return (
        <section id="contact" className="py-20">
            <h1 className="font-bold text-4xl md:text-5xl text-center">
                Get in touch -
                <span className="text-purple-400"> Let's Connect</span>
            </h1>
            <div className="grid-12-cols mt-16">
                <div className="xl:col-span-5">
                    <div className="flex-center card-border rounded-xl p-10">
                        <form
                            onSubmit={handleSubmit}
                            className="w-full flex flex-col gap-7"
                            ref={formRef}
                        >
                            <div>
                                <label htmlFor="name">Your name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="What’s your good name?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Your Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="What’s your email address?"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="message">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="How can I help you?"
                                    rows={5}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit">
                                <div className="cta-button group">
                                    <div className="bg-circle" />
                                    <p className="text">
                                        {loading
                                            ? "Sending..."
                                            : "Send Message"}
                                    </p>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="xl:col-span-7 min-h-96">
                    <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                        <ContactExperience />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
