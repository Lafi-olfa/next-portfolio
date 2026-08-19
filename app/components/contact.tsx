"use client";

import Link from "next/link";
import { useState } from "react";
import {
    BiLogoGmail,
    BiSolidLocationPlus,
    BiPhone,
} from "react-icons/bi";
import * as emailjs from "@emailjs/browser";

export default function Contact() {
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setUserInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const emailParams = {
            name: userInput.name,
            email: userInput.email,
            message: userInput.message,
        };

  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        setIsLoading(true);

        try {
            const res = await emailjs.send(
                serviceID,
                templateID,
                emailParams,
                userID
            );

            if (res.status === 200) {
                alert("Message sent successfully!");
                setUserInput({
                    name: "",
                    email: "",
                    message: "",
                });
            } else {
                alert("Failed to send message. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setIsLoading(false);
        }
    };

    const contactInfo = [
        {
            icon: <BiLogoGmail size={22} />,
            title: "Email",
            value: "olfalafi1998@gmail.com",
            href: "mailto:olfalafi1998@gmail.com",
        },
        {
            icon: <BiPhone size={22} />,
            title: "Phone",
            value: "+216 28 408 626",
            href: "tel:+21628408626",
        },
        {
            icon: <BiSolidLocationPlus size={22} />,
            title: "Location",
            value: "Sfax, Tunisia",
            href: "#",
        },
    ];

    return (
        <section
            id="contact"
            className="w-full bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-500">
                        Get in touch
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Let&apos;s{" "}
                        <span className="text-amber-500">
                            Talk
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
                        Have a project, an opportunity, or simply want to
                        connect? Feel free to send me a message.
                    </p>
                </div>

                {/* Content */}
                <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">

                    {/* Contact Information */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Contact Information
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-gray-500">
                            I&apos;m always open to discussing new projects,
                            opportunities and collaborations.
                        </p>

                        <div className="mt-8 space-y-6">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                                        {item.icon}
                                    </div>

                                    <div className="min-w-0">
                                        <p className="text-sm font-medium text-gray-400">
                                            {item.title}
                                        </p>

                                        <Link
                                            href={item.href}
                                            className="break-all text-sm font-semibold text-gray-800 transition-colors hover:text-amber-500 sm:text-base"
                                        >
                                            {item.value}
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bottom Message */}
                        <div className="mt-10 rounded-2xl bg-gray-50 p-5">
                            <p className="text-sm leading-6 text-gray-500">
                                I&apos;ll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 lg:col-span-3">
                        <h3 className="text-2xl font-bold text-gray-900">
                            Send a Message
                        </h3>

                        <p className="mt-2 text-sm text-gray-500">
                            Fill out the form below and I&apos;ll get back to
                            you soon.
                        </p>

                        <form
                            onSubmit={handleSubmit}
                            className="mt-8 space-y-5"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={userInput.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your name"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={userInput.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email"
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-semibold text-gray-700"
                                >
                                    Your Message
                                </label>

                                <textarea
                                    name="message"
                                    id="message"
                                    value={userInput.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-amber-500 focus:bg-white focus:ring-2 focus:ring-amber-500/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="flex w-full items-center justify-center gap-3 rounded-xl bg-amber-500 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20 disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isLoading ? (
                                    <>
                                        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                                        Sending...
                                    </>
                                ) : (
                                    "Send Message"
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}