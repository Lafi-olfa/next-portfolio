"use client";
import Link from "next/link";
import { useState } from "react";
import { BiLogoGmail, BiSend, BiSolidLocationPlus } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import emailjs from 'emailjs-com';

export default function Contact() {
    const [userInput, setUserInput] = useState({
        name: '', email: '', message: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
 if (!serviceID || !templateID || !userID) {
            console.log('Configuration EmailJS manquante. Vérifiez vos variables d\'environnement.');
            // setIsLoading(false);
            return;
        }
        try {
            const emailParams = {
                name: userInput.name,
                email: userInput.email,
                message: userInput.message
            };
            const res = await emailjs.send(serviceID, templateID, emailParams, userID);

      if (res.status === 200) {
        console.log("Message sent successfully!");
        setUserInput({
          name: "",
          email: "",
          message: ""
        });
      }
        } catch (error) {
            console.log(error);

        }

    }
    return (
        <section id="contact">
            <div className="container mx-auto max-w-5xl px-4 ">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-amber-500">Touch</span>
                </h2>
                <p className="text-center mb-12 max-w-5xl max-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
                    itaque ipsum vitae rem similique fugit dolor unde eum sit omnis nulla
                    voluptates illum quidem dicta delectus sequi, fuga consequuntur
                    numquam.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8 px-5 bg-indigo-100">
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
                    {/*  */}
                    <div className="space-y-4 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-bold mb-6"> Send a message</h3>
                        <form action="" className="space-y-6">
                            <div>
                                <label htmlFor=""
                                    className="mb-2 font-medium block text-sm"
                                >Your Name</label>
                                <input type="text" name="text" id="name"       value={userInput.name}
                                    onChange={handleChange} required
                                    placeholder="Enter your name"
                                    className="w-full px- py-3 rounded-md boder-input focus:outline-hidden focus:ring-2"
                                />
                            </div>
                            {/* email */}
                            <div>
                                <label htmlFor=""
                                    className="mb-2 font-medium block text-sm"
                                >Your Email</label>
                                <input type="email" name="email" id="email"  value={userInput.email}
                                    onChange={handleChange} required
                                    placeholder="Enter your email"
                                    className="w-full px- py-3 rounded-md boder-input focus:outline-hidden focus:ring-2"
                                />
                            </div>
                            {/* email */}
                            <div>
                                <label htmlFor=""
                                    className="mb-2 font-medium block text-sm"
                                >Your Message</label>
                                <textarea
                                    name="message" id="message" required
                                     value={userInput.message} onChange={handleChange}
                                    placeholder="Enter your message"
                                    className="w-full px- py-3 rounded-md boder-input focus:outline-hidden focus:ring-2 resize-none"
                                />
                            </div>
                            <button type="submit"
                                className="flex items-center justify-center gap-2 w-full bg-amber-200"
                                onSubmit={handleSubmit}
                            >
                                Send Message <BiSend size={24} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}