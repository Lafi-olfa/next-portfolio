export default function HeroSection() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-white py-16">
            <div className="container mx-auto px-4 flex flex-col items-center gap-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                    Hi, I&apos;m <span className="text-amber-500">Olfa Lafi</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>

                <p className="text-gray-500 max-w-3xl leading-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, ab nihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisi velit.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mt-6">
                    <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 mb-2 sm:mb-0">
                        View My Work
                    </button>
                    <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    )
}