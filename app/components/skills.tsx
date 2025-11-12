'use client';
import { useState } from "react"

export default function Skills() {
    const skills = [
        {
            category: 'All',
            skillsList: [
                'HTML/CSS', "JavaScript", "TypeScript",
                "Bootstrap", "Tailwind CSS", "Next.js", "React.js",
                "Meteor.js", "Node.js", "Express.js",
                "CodeIgniter", "REST API", "MongoDB",
                "Cypress"
            ]
        },
        {
            category: 'Frontend',
            skillsList: [
                'HTML/CSS', "JavaScript", "TypeScript",
                "Bootstrap", "Tailwind CSS", "Next.js", "React.js"
            ]
        },
        {
            category: 'Backend',
            skillsList: [
                "Meteor.js", "Node.js", "Express.js",
                "CodeIgniter", "REST API", "MongoDB"
            ]
        },
        {
            category: 'Test',
            skillsList: [
                "Cypress"
            ]
        }
    ]
    
    const [selectedSkill, setSelectedSkill] = useState('All');
    
    const selectedCategory = skills.find(skill => skill.category === selectedSkill);
    
    return (
        <section id="skills" className="w-full min-h-screen flex items-center justify-center py-16">
            <div className="container mx-auto px-4 text-center text-xl">
                <h1>My <span className="text-amber-500">Skills</span></h1>
                <div className="grid grid-cols-4 gap-4 mt-4">
                    {
                        skills.map((skill, i) => (
                            <button 
                                key={i} 
                                className={`rounded-lg lg:px-4 py-2 hover:bg-amber-500 text-base text-gray-800 leading-tight
                                     ${
                                    selectedSkill === skill.category ? 'bg-amber-500' : ''
                                }`}
                                onClick={() => setSelectedSkill(skill.category)}
                            >
                                {skill.category}
                            </button>
                        ))
                    }
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 w-full">
                    {selectedCategory?.skillsList.map((skill, index) => (
                        <div 
                            key={index} 
                            className="bg-blue-400 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-100 hover:bg-indigo-200 h-12 flex items-center justify-center text-white rounded-lg"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}