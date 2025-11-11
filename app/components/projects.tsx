import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            image: '/dan-laptop.png',
            alt: 'Capture d\'écran du projet Dan Laptop',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['React', 'Tailwind CSS', 'Next.js', 'Stripe'],
            live: 'https://dan-laptop.com',
            github: 'https://github.com/votre-repo/dan-laptop'
        },
        {
            image: '/project2.png',
            alt: 'Application de gestion de tâches',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
            live: 'https://taskmanager.com',
            github: 'https://github.com/votre-repo/task-manager'
        },
        {
            image: '/project3.png',
            alt: 'Plateforme de recettes',
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor eaque odit aperiam fugit reiciendis quasi nisi pariatur, eos, abnihil, itaque minus. Ut tempora, amet voluptate omnis laboriosam nisivelit.",
            technologies: ['Next.js', 'MongoDB', 'NextAuth', 'Tailwind CSS'],
            live: 'https://chef-companion.com',
            github: 'https://github.com/votre-repo/chef-companion'
        },
    ];
    return (
        <section id="projects" className="w-full min-h-screen flex
items-center justify-center py-16">
            <div className="container mx-auto px-4">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
                        Projects
                    </h1>
                </div>
                {/* Grille des projets */}
                <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg overflow-hidden
hover:shadow-xl transition-all duration-300 group"
                        >
                            {/* Image du projet */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="w-full h-48 object-cover group-hover:scale-105
transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-0
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
break-words max-w-full"
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
break-words max-w-full"
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
