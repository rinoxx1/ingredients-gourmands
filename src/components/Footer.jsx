// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    // Get the current year dynamically
    const currentYear = new Date().getFullYear();

    return (
        // New footer design: darker background, more streamlined layout
        <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-200 py-10 px-4 sm:px-6 mt-auto shadow-inner border-t border-gray-700">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8">

                {/* Section 1: Logo and Copyright - Centered on mobile, left-aligned on desktop */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <Link to="/" className="flex items-center mb-3 text-white hover:text-lime-400 transition-colors duration-300">
                        {/* Implemented the Font Awesome utensil icon from the header */}
                        <i className="fas fa-utensils text-lime-400 text-3xl sm:text-4xl mr-3"></i>
                        <span className="text-2xl font-bold">Ingrédients Gourmands</span>
                    </Link>
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Ingrédients Gourmands. Tous droits réservés.
                    </p>
                </div>

                {/* Section 2: Quick Links & Social Media - Combined and centered on mobile, right-aligned on desktop */}
                <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
                    {/* Quick Links */}
                    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg font-medium">
                        <li>
                            <Link to="/contact" className="hover:text-lime-400 transition-colors duration-200">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="hover:text-lime-400 transition-colors duration-200">
                                FAQ
                            </Link>
                        </li>
                        <li>
                            <Link to="/privacy-policy" className="hover:text-lime-400 transition-colors duration-200">
                                Politique de Confidentialité
                            </Link>
                        </li>
                        <li>
                            <Link to="/terms-of-use" className="hover:text-lime-400 transition-colors duration-200">
                                Conditions d'Utilisation
                            </Link>
                        </li>
                    </ul>

                    {/* Social Media Icons */}
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {/* Instagram Link */}
                        <a
                            href="https://www.instagram.com/ingredients_gourmands/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-pink-400 transition-colors duration-200"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram text-3xl"></i>
                        </a>
                        {/* Facebook Link */}
                        <a
                            href="https://web.facebook.com/profile.php?id=61576352684050"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f text-3xl"></i>
                        </a>
                        {/* Twitter Link */}
                        <a
                            href="https://x.com/Ingrdients_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter text-3xl"></i>
                        </a>
                        {/* Add more social media icons as needed */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
