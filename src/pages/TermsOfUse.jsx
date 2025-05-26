// src/pages/TermsOfUse.jsx
import React from 'react';

function TermsOfUse() {
    return (
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center">Conditions d'utilisation</h1>
            <div className="prose max-w-none text-gray-700 text-lg sm:text-xl leading-relaxed space-y-6">
                <p>
                    Bienvenue sur Ingrédients Gourmands. En accédant à ce site web et en l'utilisant, vous acceptez d'être lié par les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Accès au service</h2>
                <p>
                    Ingrédients Gourmands est une application web qui vous aide à trouver des recettes basées sur les ingrédients que vous avez. Nous nous efforçons de maintenir le site accessible et fonctionnel, mais nous ne garantissons pas un accès ininterrompu ou sans erreur.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Contenu des recettes</h2>
                <p>
                    Les recettes, y compris les listes d'ingrédients, les informations nutritionnelles et les liens vers les instructions, sont fournies par l'API Edamam. Nous ne sommes pas responsables de l'exactitude, de l'exhaustivité ou de la fiabilité du contenu des recettes. Les utilisateurs doivent toujours faire preuve de bon sens et de prudence lors de la préparation des aliments et suivre les instructions des sources originales.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Conduite de l'utilisateur</h2>
                <p>
                    Vous acceptez d'utiliser Ingrédients Gourmands uniquement à des fins légales et d'une manière qui ne porte pas atteinte aux droits d'autrui, ne restreint pas ou n'inhibe pas l'utilisation et la jouissance du site par quiconque. L'utilisation abusive du site, y compris la soumission de requêtes automatisées excessives, est interdite.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Propriété intellectuelle</h2>
                <p>
                    Le contenu original du site Ingrédients Gourmands (hors contenu de l'API Edamam), y compris le texte, les graphiques, les logos et les icônes, est notre propriété ou celle de nos concédants de licence et est protégé par les lois sur la propriété intellectuelle.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Exclusion de garantie</h2>
                <p>
                    Le site est fourni "tel quel" sans aucune garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas que le site sera exempt d'erreurs ou ininterrompu, ni que les défauts seront corrigés.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Limitation de responsabilité</h2>
                <p>
                    En aucun cas, Ingrédients Gourmands ne sera responsable de tout dommage direct, indirect, accessoire, spécial ou consécutif découlant de l'utilisation ou de l'impossibilité d'utiliser ce site.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Modifications des conditions</h2>
                <p>
                    Nous nous réservons le droit de modifier ces conditions d'utilisation à tout moment. Toute modification sera effective dès sa publication sur cette page. Il est de votre responsabilité de consulter régulièrement ces conditions.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Loi applicable</h2>
                <p>
                    Ces conditions sont régies et interprétées conformément aux lois en vigueur, sans égard à ses dispositions en matière de conflit de lois.
                </p>
                <p className="text-sm text-gray-500 mt-8 italic">Dernière mise à jour : 26 mai 2025</p>
            </div>
        </div>
    );
}

export default TermsOfUse;