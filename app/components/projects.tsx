import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            image: '/assets/desktop-design-completed.jpg',
            alt: 'Capture d\'écran du projet Dan Laptop',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['React', 'Tailwind CSS', 'Next.js', 'Stripe'],
            live: 'https://react-tip-calculator-blond.vercel.app/',
            github: 'https://github.com/Lafi-olfa/react-tip-calculator'
        },
        {
            image: '/assets/desktop-design.jpg',
            alt: 'Application de gestion de tâches',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            live: 'https://taskmanager.com',
            github: 'https://github.com/Lafi-olfa/react-expenses-chart-component'
        },
        {
            image: '/assets/desktop-design-step-1.jpg',
            alt: 'Plateforme de recettes',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['ReactJs ','Tailwind CSS'],
            live: 'https://react-mutli-step-form.vercel.app/',
            github: 'https://github.com/Lafi-olfa/react-mutli-step-form'
        },
        
    ];
    return (
        <section id="projects" className="w-full min-h-screen flex
items-center justify-center py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
                        Projects
                    </h1>
                </div>
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden
hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image du projet */}
                            <div className="relative overflow-hidden">
                                {/* <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="w-full h-48 object-cover group-hover:scale-105
transition-transform duration-300"
                                /> */}
                                <Image
                                    height={500}
                                    width={500}
                                      src={project.image}
                                    alt={project.alt}
                                    className="w-full h-60 object-cover group-hover:scale-105
transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-opacity-0
group-hover:bg-opacity-10 transition-all duration-300" />
                            </div>
                            {/* Contenu */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 leading-relaxed">
                                    {project.description}
                                </p>
                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white
rounded-full text-sm font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {/* Boutons */}
                                <div className="flex gap-4 flex-col md:flex-row">
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 py-2 px-4 border border-gray-300 rounded-lg
text-center font-medium hover:bg-amber-600 hover:text-white
transition-colors duration-200 text-sm sm:text-base md:text-lg
wrap-break-word max-w-full"
                                    >
                                        View Project
                                    </Link>

                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 border border-gray-300 py-2 px-4 rounded-lg
text-center font-medium hover:bg-amber-600 hover:text-white
transition-colors duration-200 text-sm sm:text-base md:text-lg
wrap-break-word max-w-full"
                                    >
                                        View Github
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
