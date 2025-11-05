export default function About() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-blue-300 py-6">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                   About Me
                </h1>
                <div className="flex flex-col md:flex-row gap-2">
                    <div className="flex flex-col bg-amber-200 ">
                        <h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ex labore magnam id? Sapiente ab dolores minus ut aperiam accusamus, nostrum fuga temporibus harum dignissimos tempore at mollitia. Ex, explicabo?
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique distinctio quam ipsam corrupti quas beatae quod tenetur iste, enim possimus? Quos alias debitis eveniet voluptates quo sunt, nesciunt id officia?
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 mt-6">
                           <button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 mb-2 sm:mb-0">
                       Download Cv
                    </button>
                    <button className="border-2 border-gray-800 hover:bg-gray-800 hover:text-white text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-300">
                        Contact Me
                    </button>
                        </div>
                    </div>
                    <div className="flex flex-col bg-amber-600">
                        <p>kk</p>
                        <p>kkk</p>
                    </div>
                </div>
          
            </div>
        </section>
    )
}