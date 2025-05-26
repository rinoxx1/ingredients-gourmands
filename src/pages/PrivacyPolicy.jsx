// src/pages/PrivacyPolicy.jsx
import React from 'react';

function PrivacyPolicy() {
    return (
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-8 text-center">Politique de confidentialité</h1>
            <div className="prose max-w-none text-gray-700 text-lg sm:text-xl leading-relaxed space-y-6">
                <p>
                    Bienvenue sur Ingrédients Gourmands. Nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations personnelles.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Informations que nous collectons</h2>
                <p>
                    Nous ne collectons aucune information personnelle identifiable directement via ce site. Lorsque vous utilisez notre barre de recherche, les ingrédients que vous saisissez sont envoyés à l'API Edamam pour récupérer des recettes. Nous ne stockons pas ces requêtes de recherche.
                </p>
                <p>
                    Des données d'utilisation anonymes et agrégées peuvent être collectées par des services tiers (comme Google Analytics, si intégré) pour nous aider à comprendre comment les utilisateurs interagissent avec notre site et améliorer nos services. Ces données ne permettent pas de vous identifier personnellement.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Utilisation des informations</h2>
                <p>
                    Les informations non personnelles collectées sont utilisées pour :
                </p>
                <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Fournir et améliorer nos services de recherche de recettes.</li>
                    <li>Analyser l'utilisation du site et les tendances.</li>
                    <li>Maintenir la sécurité et le bon fonctionnement du site.</li>
                </ul>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Partage des informations</h2>
                <p>
                    Nous ne vendons, n'échangeons ni ne louons vos informations personnelles à des tiers. Les requêtes de recherche sont partagées avec l'API Edamam conformément à leurs propres politiques de confidentialité.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Liens vers des sites tiers</h2>
                <p>
                    Notre site peut contenir des liens vers des sites web tiers (par exemple, les sites d'origine des recettes). Nous ne sommes pas responsables des pratiques de confidentialité ou du contenu de ces sites tiers. Nous vous encourageons à consulter les politiques de confidentialité de ces sites.
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Modifications de cette politique</h2>
                <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de "dernière mise à jour".
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold text-lime-700 mt-8 mb-4">Contact</h2>
                <p>
                    Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à <a href="mailto:contact@ingredientsgourmands.com" className="text-lime-700 hover:underline">contact@ingredientsgourmands.com</a>.
                </p>
                <p className="text-sm text-gray-500 mt-8 italic">Dernière mise à jour : 26 mai 2025</p>
            </div>
        </div>
    );
}

export default PrivacyPolicy;