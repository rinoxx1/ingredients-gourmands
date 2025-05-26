// src/pages/FAQ.jsx
import React from 'react';

function FAQ() {
    return (
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center">Foire aux questions (FAQ)</h1>
            <div className="space-y-8">
                <div className="faq-item">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mb-3">Comment rechercher une recette ?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Entrez simplement un ou plusieurs ingrédients (séparés par des virgules) dans la barre de recherche en haut de la page, puis cliquez sur le bouton de recherche ou appuyez sur "Entrée".
                    </p>
                </div>
                <div className="faq-item">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mb-3">D'où viennent les recettes ?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Toutes les recettes sont fournies par l'API Edamam, une base de données culinaire complète.
                    </p>
                </div>
                <div className="faq-item">
                    {/* Fixed: Added &nbsp; before the question mark to keep it on the same line */}
                    <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mb-3">Pourquoi certaines recettes n'ont pas d'instructions complètes&nbsp;?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        L'API Edamam fournit les ingrédients et des informations générales. Pour les instructions de préparation détaillées, vous serez redirigé vers le site web d'origine de la recette.
                    </p>
                </div>
                <div className="faq-item">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mb-3">Puis-je enregistrer mes recettes favorites ?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Cette fonctionnalité n'est pas encore disponible, mais nous prévoyons de l'ajouter dans une future mise à jour !
                    </p>
                </div>
                <div className="faq-item">
                    <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mb-3">Les informations nutritionnelles sont-elles disponibles ?</h2>
                    <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                        Oui, la page de détails de chaque recette affiche des informations nutritionnelles si elles sont disponibles via l'API Edamam.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default FAQ;
