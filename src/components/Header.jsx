// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Accept onLogoClick prop
function Header({ onLogoClick }) { 
    return (
        <header className="fixed top-0 left-0 w-full z-[1000] p-4 bg-gradient-to-r from-[#FFF8E1] to-[#FFECB3] flex items-center gap-3 border-b border-amber-200">
            {/* Call onLogoClick when the Link is clicked */}
            <Link 
                to="/" 
                className="flex items-center gap-3 text-gray-800 hover:text-lime-700 transition duration-300"
                onClick={onLogoClick} // Add the onClick handler
            >
                <i className="fas fa-utensils text-lime-600 text-3xl sm:text-4xl animate-bounce-subtle"></i>
                <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">Ingrédients Gourmands</span>
            </Link>
        </header>
    );
}

export default Header;