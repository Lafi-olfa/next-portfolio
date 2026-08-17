import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-white py-16" id="home">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Hi, I&apos;m <span className="text-amber-500">Olfa Lafi</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Full-Stack Web Developer with a passion for creating functional and engaging web applications.
                </p>

                <p className="text-gray-500 max-w-3xl leading-7">
                    I enjoy turning ideas into complete web solutions, working across both
                    frontend and backend to build responsive interfaces, reliable APIs,
                    and maintainable applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mt-6">
                    <Link href='#skills' className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 mb-2 sm:mb-0">
                        View My Work
                    </Link>
                    <Link href='#contact' className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                        Contact Me
                    </Link>
                </div>
            </div>
        </section>
    )
}