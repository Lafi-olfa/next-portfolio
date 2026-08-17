"use client";
import Link from "next/link";
import { useState } from "react";
import { BiLogoGmail, BiSolidLocationPlus } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import * as emailjs from '@emailjs/browser';

export default function Contact() {
    const [userInput, setUserInput] = useState({
        name: '', email: '', message: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        console.log(name, value);

        setUserInput({
            ...userInput,
            [name]: value
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const emailParams = {
            name: userInput.name,
            email: userInput.email,
            message: userInput.message
        };

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !userID) {
            console.error("One or many variables are missing!");
            return;
        }
        setIsLoading(true);
        try {
            const res = await emailjs.send(
                serviceID,
                templateID,
                emailParams,
                userID
            );

            if (res.status === 200) {
                alert("Message sent successfully");
                setUserInput({ name: '', email: '', message: '' });
                setIsLoading(false);
            } else {
                alert("Failed to send message. Please try again later.");
            }
        } catch (error) {
            alert("Error");
            console.log(error);
            setIsLoading(false);
        }
    };

    return (
        <section id="contact">
            <div className="container mx-auto max-w-5xl px-4 ">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 text-center">
                    Get in <span className="text-amber-500">Touch</span>
                </h1>

                <p className="text-center mb-12 max-w-3xl mx-auto text-gray-500 leading-7">
                    I&apos;m always open to discussing new projects, opportunities, and
                    collaborations. Feel free to reach out and let&apos;s talk about how
                    we can work together.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6">
                            Contact information
                        </h3>
                        <div className="space-y-6 justify-center text-start">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-amber-500/20">
                                    <BiLogoGmail size={24} className="text-amber-600" />
                                </div>
                                <div>
                                    <h4>Email</h4>
                                    <Link href='#'
                                        className="hover:text-amber-600"
                                    >
                                        olfalafi1998@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-amber-500/20">
                                    <BiPhone size={24} className="text-amber-600" />
                                </div>
                                <div>
                                    <h4>Phone</h4>
                                    <Link href='#'
                                        className="hover:text-amber-600"
                                    >
                                        +216 28 408 626
                                    </Link>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-amber-500/20">
                                    <BiSolidLocationPlus size={24} className="text-amber-600" />
                                </div>
                                <div>
                                    <h4>Location</h4>
                                    <Link href='#'
                                        className="hover:text-amber-600"
                                    >
                                        Sfax, Tunis
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="space-y-4 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-bold mb-6"> Send a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name"
                                    className="mb-2 font-medium block text-sm"
                                >Your Name</label>
                                <input type="text" name="name" id="name" value={userInput.name}
                                    onChange={handleChange} required
                                    placeholder="Enter your name"
                                    className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            {/* email */}
                            <div>
                                <label htmlFor="email"
                                    className="mb-2 font-medium block text-sm"
                                >Your Email</label>
                                <input type="email" name="email" id="email"
                                    value={userInput.email}
                                    onChange={handleChange} required
                                    placeholder="Enter your email"
                                    className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                            </div>
                            {/* message */}
                            <div>
                                <label htmlFor="message"
                                    className="mb-2 font-medium block text-sm"
                                >Your Message</label>
                                <textarea
                                    name="message" id="message" required
                                    value={userInput.message} onChange={handleChange}
                                    placeholder="Enter your message"
                                    rows={4}
                                    className="w-full px-3 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                                />
                            </div>
                            <button type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors"

                            >
                                {isLoading ? (
                                    <><svg aria-hidden="true" className="inline w-8 h-8 w-8 h-8 text-neutral-tertiary animate-spin fill-brand" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg><span className="sr-only">Loading...</span></>
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