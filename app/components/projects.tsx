import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    const projects = [
        {
            image: "/assets/desktop-design-bookmark.jpg",
            alt: "Bookmark Manager application",
            title: "Bookmark Manager",
            description:
                "A full-stack bookmark management application with authentication, search, filtering, pinning, archiving and bookmark management.",
            technologies: [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                'Figma'
            ],
            live: "https://bookmark-manager-frontend.vercel.app/",
            github: "https://github.com/Lafi-olfa/bookmark-manager",
        },
        {
            image: "/assets/desktop-design-completed.jpg",
            alt: "Tip Calculator application",
            title: "Tip Calculator",
            description:
                "A responsive tip calculator that calculates the tip and total amount per person with real-time calculations and input validation.",
            technologies: [
                "React",
                "JavaScript",
                "Tailwind CSS",
                'Figma'
            ],
            live: "https://react-tip-calculator-blond.vercel.app/",
            github: "https://github.com/Lafi-olfa/react-tip-calculator",
        },
        {
            image: "/assets/desktop-design.jpg",
            alt: "Expenses Chart application",
            title: "Expenses Chart",
            description:
                "A responsive interactive expense chart with dynamic data rendering, hover interactions and reusable React components.",
            technologies: [
                "React",
                "JavaScript",
                "CSS",
                'Figma'
            ],
            live: "https://react-expenses-chart-component.vercel.app/",
            github:
                "https://github.com/Lafi-olfa/react-expenses-chart-component",
        },
        {
            image: "/assets/desktop-design-step-1.jpg",
            alt: "Multi-step form application",
            title: "Multi-step Form",
            description:
                "A responsive multi-step form with navigation, state management, validation, editable selections and a final confirmation step.",
            technologies: [
                "React",
                "Tailwind CSS",
                'Figma'
            ],
            live: "https://react-mutli-step-form.vercel.app/",
            github:
                "https://github.com/Lafi-olfa/react-mutli-step-form",
        },
    ];

    return (
        <section
            id="projects"
            className="w-full bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-500">
                        My Work
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        Featured{" "}
                        <span className="text-amber-500">
                            Projects
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
                        A selection of projects I have designed and developed
                        using modern web technologies.
                    </p>
                </div>

                {/* Projects */}
                <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <article
                            key={project.title}
                            className="group overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.alt}
                                    width={900}
                                    height={600}
                                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-64"
                                />

                                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/5" />
                            </div>

                            {/* Project Content */}
                            <div className="p-6 sm:p-7">

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-600"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                                    <Link
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 rounded-xl bg-amber-500 px-5 py-3 text-center text-sm font-semibold text-white transition-colors duration-300 hover:bg-amber-600"
                                    >
                                        View Project
                                    </Link>

                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 rounded-xl border border-gray-200 px-5 py-3 text-center text-sm font-semibold text-gray-700 transition-all duration-300 hover:border-amber-500 hover:text-amber-500"
                                    >
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}