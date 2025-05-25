// src/components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#FFECB3] to-[#FFF8E1] mt-10 p-8 sm:p-12 text-center shadow-inner border-t border-amber-200">
            <div className="max-w-6xl mx-auto">
                <p className="text-gray-700 text-lg sm:text-xl mb-6">
                    &copy; 2024 Ingrédients Gourmands. Tous droits réservés.
                </p>
                <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-lg sm:text-xl font-medium">
                    <a href="/#" className="text-gray-700 hover:text-lime-700 transition duration-200">Contactez-nous</a>
                    <a href="/#" className="text-gray-700 hover:text-lime-700 transition duration-200">FAQ</a>
                    <a href="/#" className="text-gray-700 hover:text-lime-700 transition duration-200">Politique de confidentialité</a>
                    <a href="/#" className="text-gray-700 hover:text-lime-700 transition duration-200">Conditions d'utilisation</a>
                </div>
                <div className="mt-8 flex justify-center gap-6">
                    <a href="/#" className="text-gray-600 hover:text-lime-700 transition duration-200 text-2xl"><i className="fab fa-facebook"></i></a>
                    <a href="/#" className="text-gray-600 hover:text-lime-700 transition duration-200 text-2xl"><i className="fab fa-instagram"></i></a>
                    <a href="/#" className="text-gray-600 hover:text-lime-700 transition duration-200 text-2xl"><i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;