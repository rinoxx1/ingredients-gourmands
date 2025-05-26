// src/pages/Contact.jsx
import React from 'react';

function Contact() {
    return (
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center">Contactez-nous</h1>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mb-6">
                Pour toute question, suggestion ou problème, n'hésitez pas à nous contacter via les informations ci-dessous. Nous nous efforçons de répondre dans les plus brefs délais.
            </p>
            <div className="space-y-6 sm:space-y-8 text-gray-700">
                <div className="flex items-center text-xl sm:text-2xl">
                    <i className="fas fa-envelope text-lime-600 mr-4"></i>
                    {/* Updated email address */}
                    <span>Email : <a href="mailto:ingredientsgourmands@gmail.com" className="text-lime-700 hover:underline">ingredientsgourmands@gmail.com</a></span>
                </div>
                {/* Removed Phone Number and Address sections */}
            </div>
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed mt-10 text-center">
                Vous pouvez également nous suivre sur nos réseaux sociaux pour les dernières mises à jour et recettes !
            </p>
        </div>
    );
}

export default Contact;
