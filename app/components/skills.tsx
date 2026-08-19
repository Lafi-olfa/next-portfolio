'use client';

import { useState } from 'react';

export default function Skills() {
    const skills = [
        {
            category: 'All',
            skillsList: [
                {name:'Meteor.js', short: 'M' },
                { name: 'Next.js', short: 'N' },
                { name: 'React.js', short: '⚛' },
                { name: 'JavaScript', short: 'JS' },
                { name: 'TypeScript', short: 'TS' },
                { name: 'Bootstrap', short: 'B' },
                { name: 'Tailwind CSS', short: 'TW' },
                { name: 'Meteor.js', short: 'M' },
                { name: 'Node.js', short: 'JS' },
                { name: 'Express.js', short: 'EX' },
                { name: 'CodeIgniter', short: 'CI' },
                { name: 'REST API', short: '{}' },
                { name: 'MongoDB', short: 'M' },
                { name: 'Cypress', short: 'CY' },
            ],
        },
        {
            category: 'Frontend',
            skillsList: [
                { name: 'JavaScript', short: 'JS' },
                { name: 'TypeScript', short: 'TS' },
                { name: 'Bootstrap', short: 'B' },
                { name: 'Tailwind CSS', short: 'TW' },
                { name: 'Next.js', short: 'N' },
                { name: 'React.js', short: '⚛' },
            ],
        },
        {
            category: 'Backend',
            skillsList: [
                { name: 'Meteor.js', short: 'M' },
                { name: 'Node.js', short: 'JS' },
                { name: 'Express.js', short: 'EX' },
                { name: 'CodeIgniter', short: 'CI' },
                { name: 'REST API', short: '{}' },
                { name: 'MongoDB', short: 'M' },
            ],
        },
        {
            category: 'Test',
            skillsList: [{ name: 'Cypress', short: 'CY' }],
        },
    ];

    const [selectedSkill, setSelectedSkill] = useState('All');

    const selectedCategory = skills.find(
        (skill) => skill.category === selectedSkill
    );

    return (
        <section
            id="skills"
            className="w-full bg-gray-50 px-4 py-20 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <span className="inline-block rounded-full bg-amber-50 px-4 py-2 text-sm font-semibold uppercase tracking-wider text-amber-500">
                        What I do
                    </span>

                    <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        My{' '}
                        <span className="text-amber-500">
                            Skills
                        </span>
                    </h2>

                    <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
                        Technologies and tools I use to build modern,
                        performant and scalable web applications.
                    </p>
                </div>

                {/* Categories */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    {skills.map((skill) => (
                        <button
                            key={skill.category}
                            onClick={() => setSelectedSkill(skill.category)}
                            className={`rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 sm:px-6 ${
                                selectedSkill === skill.category
                                    ? 'border-amber-500 bg-amber-500 text-white shadow-md shadow-amber-500/20'
                                    : 'border-gray-200 bg-white text-gray-700 hover:border-amber-300 hover:text-amber-500'
                            }`}
                        >
                            {skill.category}
                        </button>
                    ))}
                </div>

                {/* Skills Container */}
                <div className="mt-12 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {selectedCategory?.skillsList.map((skill) => (
                            <div
                                key={skill.name}
                                className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg"
                            >
                                {/* Skill Icon */}
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-sm font-bold text-gray-700 transition-all duration-300 group-hover:bg-amber-50 group-hover:text-amber-500">
                                    {skill.short}
                                </div>

                                {/* Skill Name */}
                                <div>
                                    <h3 className="font-semibold text-gray-800">
                                        {skill.name}
                                    </h3>

                                    <p className="mt-1 text-xs text-gray-400">
                                        {selectedSkill === 'All'
                                            ? 'Technology'
                                            : selectedSkill}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}