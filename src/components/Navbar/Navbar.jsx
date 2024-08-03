import React from 'react';
import logoImage from '../../assets/utd.png'; 

const NavLinks = [
    { id: "1", name: "Home", link: "/#home" },
    { id: "2", name: "Principle Investigator", link: "/#principle-investigator" },
    { id: "3", name: "Team", link: "/#team" },
    { id: "4", name: "Events", link: "/#events" },
    { id: "5", name: "Hiring", link: "/#hiring" },
    { id: "6", name: "Publication", link: "/#publications" },
    { id: "7", name: "Newsroom", link: "/#newsroom" },
    { id: "8", name: "Contact", link: "/#contact" },
];

const Navbar = () => {
    const scrollToSection = (event, link) => {
        event.preventDefault();
        const sectionId = link.slice(2);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <div style={{ position: 'fixed', width: '100%', top: 0, zIndex: 1000 }}>
            <nav className="shadow-md bg-yellow-600">
                <div className="container">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={logoImage} alt="AMC Laboratory Logo" className="h-10 w-10" />
                            <h1 className="text-2xl text-white font-bold font-serif">AMC LABORATORY</h1>
                        </div>
                        <div className="hidden md:block">
                            <ul className="flex items-center gap-8">
                                {NavLinks.map((data) => (
                                    <li key={data.id} className="py-4">
                                        <a
                                            className="inline-block py-2 text-slate-100 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-md font-momo font-semibold"
                                            href={data.link}
                                            onClick={(event) => scrollToSection(event, data.link)}
                                        >
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;



