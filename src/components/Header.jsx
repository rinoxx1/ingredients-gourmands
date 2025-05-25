// src/components/Header.jsx
import React from 'react';

function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-[1000] p-4 bg-gradient-to-r from-[#FFF8E1] to-[#FFECB3] flex items-center gap-3 border-b border-amber-200">
            <i className="fas fa-utensils text-lime-600 text-3xl sm:text-4xl animate-bounce-subtle"></i>
            <span className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight">Ingrédients Gourmands</span>
        </header>
    );
}

export default Header;