'use client';
import { useState, ReactNode } from 'react';
import { IoIosArrowDown } from "react-icons/io";

type AccordionProps = {
    title: string;
    children: ReactNode;
};

export default function Accordion({ title, children }: AccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={() => setIsOpen(!isOpen)} className="overflow-hidden w-full bg-white shadow-md rounded-lg">
            <button
                className="w-full flex justify-between items-center gap-5 p-4">
                <span className="text-gray-800 text-start">{title}</span>
                <IoIosArrowDown
                    size={20}
                    className={`transition-transform duration-300 text-gray-800 ${isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                />
            </button>
            {isOpen && (
                <div className="p-6 text-gray-800 flex flex-col mt-3">
                    {children}
                </div>
            )}
        </div>
    );
}
