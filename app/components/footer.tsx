import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-white">
            <div className="mx-auto max-w-6xl px-1 py-2 sm:px-6 lg:px-8">

                <div className="flex flex-col items-center gap-6 text-center">
                    {/* <div className="flex items-center gap-3">
                        <Link
                            href="https://github.com/Lafi-olfa"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                        >
                            <FaGithub size={18} />
                        </Link>

                        <Link
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-all duration-300 hover:border-amber-500 hover:bg-amber-500 hover:text-white"
                        >
                            <FaLinkedinIn size={18} />
                        </Link>
                    </div> */}

                    {/* Copyright */}
                    <div className="w-full border-t border-gray-100 pt-6">
                        <p className="text-xs text-gray-400">
                            © {new Date().getFullYear()} Olfa Lafi. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}