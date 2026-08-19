import Link from "next/link";

export default function About() {
    const highlights = [
        {
            value: "3+",
            label: "Years experience",
        },
        {
            value: "Full-Stack",
            label: "JavaScript",
        },
        {
            value: "Web",
            label: "Development",
        },
    ];

    return (
        <section
            id="about"
            className="w-full bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">

                {/* Header */}
                <div className="max-w-2xl">
                    <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-500">
                        About me
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Building, learning,
                        <span className="text-amber-500">
                            {" "}growing.
                        </span>
                    </h2>
                </div>

                {/* Content */}
                <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-16">

                    {/* Description */}
                    <div className="lg:col-span-2">
                        <div className="space-y-5 text-base leading-7 text-gray-500 sm:text-lg">
                            <p>
                                I&apos;m a Full-Stack Web Developer with
                                professional experience in JavaScript
                                technologies. I enjoy building web applications
                                that are clean, responsive and maintainable.
                            </p>

                            <p>
                                My experience covers both frontend and backend
                                development, with a focus on Next.js,
                                TypeScript, Meteor.js, Node.js and MongoDB.
                            </p>

                            <p>
                                I&apos;m continuously learning and looking for
                                opportunities to improve my technical skills
                                and build better solutions.
                            </p>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/CV_Olfa_Lafi.pdf"
                                download="CV_Olfa_Lafi.pdf"
                                className="rounded-xl bg-amber-500 px-6 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-amber-600 hover:shadow-lg hover:shadow-amber-500/20"
                            >
                                Download CV
                            </Link>

                            <Link
                                href="#contact"
                                className="rounded-xl border-2 border-gray-900 px-6 py-3 text-center font-semibold text-gray-900 transition-all duration-300 hover:bg-gray-900 hover:text-white"
                            >
                                Contact Me
                            </Link>
                        </div>
                    </div>

                    {/* Highlights */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                            >
                                <p className="text-3xl font-bold text-amber-500">
                                    {item.value}
                                </p>

                                <p className="mt-1 text-sm font-medium text-gray-500">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}