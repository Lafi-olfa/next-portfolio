import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const projects = [
         {
            image: '/assets/desktop-design-bookmark.jpg',
            alt: 'bookmarkflow-app',
            title: 'Bookmark manager app',
            description: "Developed a full-stack bookmark management application using React, TypeScript, Node.js, Express, and MongoDB, following the provided Figma design. Built a RESTful API to handle bookmark creation, retrieval, updating, searching, filtering,pinning, soting, archiving, and deletion. Implemented authentication features including user registration, login, password recovery, and password reset. The application support dark/light theme.",
            technologies: ['React', 'TypeScript', 'MongoDB', 'Figma', 'Tailwind CSS', 'REST API'],
            live: 'https://github.com/Lafi-olfa/react-expenses-chart-component',
            github: 'https://github.com/Lafi-olfa/react-expenses-chart-component'
        },
        {
            image: '/assets/desktop-design-entertainment.jpg',
            alt: 'entertainment-web-app',
            title: 'Entertainment-web app',
            description: "Currently developing a responsive entertainment web application using React and TypeScript, following the provided Figma design. The application allows users to navigate between movies, TV series, home, and bookmarked content, search for shows, and manage their favorites.Actuallay, The project focuses on client-side routing, state management, dynamic data rendering, reusable React components, and responsive UI development.",
            technologies: ['React', 'TypeScript', 'Figma', 'Tailwind CSS'],
            live: 'https://github.com/Lafi-olfa/entertainment-app',
            github: 'https://github.com/Lafi-olfa/entertainment-app'
        },
        {
            image: '/assets/desktop-design-completed.jpg',
            alt: 'tip-calculator-app',
            title: 'Tip Calculator App',
            description: "A responsive web application that calculates the tip amount and total cost per person based on the entered bill, selected tip percentage, and number of people. The project focuses on creating a clean and intuitive user interface, responsive layouts, real-time calculations, input validation, and smooth user interactions while accurately implementing the provided Figma design.",
            technologies: ['React', 'Tailwind CSS', 'Next.js', 'Stripe'],
            live: 'https://react-tip-calculator-blond.vercel.app/',
            github: 'https://github.com/Lafi-olfa/react-tip-calculator'
        },
        {
            image: '/assets/desktop-design.jpg',
            alt: 'expenses-chart-component',
            title: 'Expenses chart component',
            description: "Built a responsive and interactive expense chart using React, following the provided Figma design. The chart dynamically renders weekly spending data from a local JSON file and uses React state management to display interactive tooltips and highlight individual bars on hover. The project focuses on reusable component-based development, dynamic data rendering, and responsive UI implementation.",
            technologies: ['React', 'JavaScript', 'Figma'],
            live: 'https://taskmanager.com',
            github: 'https://github.com/Lafi-olfa/react-expenses-chart-component'
        },
        {
            image: '/assets/desktop-design-step-1.jpg',
            alt: 'multi-step-form',
            title: 'Multi-step form',
            description: "Built a responsive multi-step form, following the provided Figma design. The application features step-by-step navigation, state management, editable selections, form validation, email format validation, and a final summary before confirmation.",
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
                                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3 hover:line-clamp-none transition-all duration-300">
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
