import Link from "next/link";

export default function About() {
    return (

        <section className="w-full min-h-screen flex items-center
justify-center py-16" id="about">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    About <span className="text-amber-500">Me</span>

                </h1>

                <div className="flex flex-col lg:flex-row md md:gap-12 ">
                    <div className="text-lg md:text-xl max-w-3xl leading-relaxed text-start">
                        <h2>A developer focused on continuous learning and growth</h2>
                        <p className="text-gray-500 max-w-3xl leading-7">
                            I am a Full-Stack Web Developer with professional
                            experience in JavaScript technologies. Throughout
                            my experience, I have worked on web applications
                            using Next.js, React, TypeScript, Node.js and
                            MongoDB, contributing to both frontend and backend
                            development.
                        </p>

                        <p className="text-gray-500 max-w-3xl leading-7">
                            I am particularly interested in building clean and
                            maintainable applications, improving performance
                            and user experience, and developing my skills in
                            modern web technologies. I am always looking for
                            new challenges that allow me to learn, improve and
                            create better solutions.
                        </p>

                    </div>
                    <div className="flex flex-col items-center justify-center sm:flex-row
gap-4 sm:gap-4 mt-6">
                        <Link
                            href="/CV_Olfa_Lafi.pdf"
                            download="CV_Olfa_Lafi.pdf"
                            className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 mb-2 sm:mb-0 inline-block"
                        >
                            Download CV
                        </Link>
                        <Link href='#contact' className="border-2 border-gray-800 hover:bg-gray-800
hover:text-white text-gray-800 px-8 py-3 rounded-lg font-medium
transition-all duration-300">
                            Contact Me
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    )
}