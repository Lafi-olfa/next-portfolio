import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function HeroSection() {
    const technologies = [
        "Meteor.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "MongoDB",
    ];

    return (
        <section
            id="home"
            className="flex min-h-screen w-full items-center bg-white px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">

                {/* Content */}
                <div className="text-center lg:text-left">

                    <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-500">
                        Full-Stack Web Developer
                    </span>

                    <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
                        Hi, I&apos;m{" "}
                        <span className="text-amber-500">
                            Olfa Lafi
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl text-lg leading-8 text-gray-500 sm:text-xl lg:mx-0">
                        I build modern and responsive web applications
                        with JavaScript technologies, from intuitive
                        interfaces to reliable backend solutions.
                    </p>

                    <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                        <Link
                            href="#projects"
                            className="rounded-xl bg-amber-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20"
                        >
                            View My Projects
                        </Link>

                        <Link
                            href="#contact"
                            className="rounded-xl border-2 border-gray-900 px-7 py-3.5 font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="mt-10">
                        <div className="mt-6 flex justify-center gap-3 lg:justify-start">
                            <Link
                                href="https://github.com/Lafi-olfa"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaGithub size={20} />
                            </Link>

                            <Link
                                href="TON_LINKEDIN"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                            >
                                <FaLinkedinIn size={20} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="relative mx-auto flex h-80 w-full max-w-md items-center justify-center lg:h-[450px]">

                    <div className="absolute h-64 w-64 rounded-full bg-amber-100 sm:h-80 sm:w-80" />

                    <div className="relative flex h-56 w-56 flex-col items-center justify-center rounded-3xl border border-gray-200 bg-white shadow-xl sm:h-72 sm:w-72">
                        <span className="text-6xl font-bold text-amber-500 sm:text-7xl">
                            OL
                        </span>

                        <span className="mt-3 text-sm font-medium text-gray-500">
                            Full-Stack Developer
                        </span>

                        <div className="mt-5 flex gap-2">
                            <span className="h-2 w-2 rounded-full bg-amber-500" />
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                            <span className="h-2 w-2 rounded-full bg-gray-300" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}