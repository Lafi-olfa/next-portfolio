export default function Skills() {
    const skills = ['All', 'Frontend', 'Backend', 'Tools']
    return (
        <section className="w-full min-h-screen flex items-center
justify-center py-16">
            <div className="container mx-auto px-4 text-center text-xl">
                <h1>My <span className="text-amber-500">Skills</span></h1>
                <div className="flex flex-row items-center justify-center gap-4 mt-4 bg-blue-50">
                    {
                        skills.map((skill, i) => (
                            <button key={i} className="rounded-lg px-2 py-2 hover:bg-amber-500 text-xl text-gray-800 leading-tight">{skill}</button>
                        ))
                    }
                </div>
                <div className="grid grid-cols-3 gap-4 md:grid-cols-2 text-xl px-2 py-2">
                    <div className="bg-blue-500 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 h-12 text-center">Html/css</div>
                    <div className="bg-pink-100">test</div>
                    <div className="bg-pink-600">test</div>
                    <div className="bg-pink-950 ">jj</div>
                    <div className="bg-pink-950 h-12">jj</div>
                </div>
            </div>
        </section>
    )
}