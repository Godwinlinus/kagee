import React from "react";
import { FiBook } from "react-icons/fi";

const Education = ({ educationData }) => {
    return (
        <section className="w-full py-16 flex flex-col gap-12 border-b">
        <div className="flex items-center gap-3 mb-6">
            <FiBook className="text-3xl" />
            <h2 className="text-3xl font-semibold tracking-tight">Education</h2>
        </div>

        <div className="flex flex-col gap-8 w-full max-w-3xl">
            {educationData.map((edu, idx) => (
            <div
                key={idx}
                className="backdrop-blur-md"
            >
                <h3 className="text-2xl font-semibold">{edu.institution}</h3>
                <p className="mt-1">{edu.degree}</p>
                {edu.description && (
                <p className="mt-3 text-sm leading-relaxed">
                    {edu.description}
                </p>
                )}
            </div>
            ))}
        </div>
        </section>
    );
};

// Example usage
const educationData = [
    {
        institution: "University of Jos, Nigeria",
        degree: "MBBS, Medicine",
        description: "Graduated with strong clinical and research experience."
    },
    {
        institution: "XYZ High School",
        degree: "Science, High School Diploma",
        description: "Focus on biology and chemistry."
    }
];

export default function App() {
    return <Education educationData={educationData} />;
}
