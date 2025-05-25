// src/components/RecipeCard.jsx
import React from 'react';

function RecipeCard({ recipe, onViewDetails }) {
    const imageUrl = recipe.image || `https://placehold.co/400x300/FFF8E1/80cbc4?text=${encodeURIComponent(recipe.label)}`;

    return (
        <div 
            className="recipe-card bg-white rounded-3xl shadow-xl overflow-hidden transform hover:scale-102 transition duration-300 cursor-pointer flex flex-col group relative"
            onClick={() => onViewDetails(recipe)} // Clickable card to open details
        >
            <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                    src={imageUrl} 
                    alt={recipe.label} 
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-115" 
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/400x300/FFF8E1/80cbc4?text=Image+introuvable`; }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                    <span className="text-xl sm:text-3xl font-bold leading-tight text-white">{recipe.label}</span>
                </div>
            </div>
            <div className="p-6 sm:p-8 flex-grow flex flex-col">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">{recipe.label}</h3>
                <div className="flex-grow text-gray-600 text-base sm:text-lg space-y-1 sm:space-y-2">
                    <p><i className="fas fa-book mr-3 sm:mr-4 text-lime-600"></i>Source : <span className="font-semibold">{recipe.source}</span></p>
                    <p><i className="fas fa-utensils mr-3 sm:mr-4 text-lime-600"></i>Ingrédients : <span className="font-semibold">{recipe.ingredientLines ? recipe.ingredientLines.length : 'N/A'}</span></p>
                </div>
                {/* Le bouton est maintenant redondant car toute la carte est cliquable, mais je le laisse si vous voulez un point de clic explicite */}
                <button 
                    onClick={(e) => { e.stopPropagation(); onViewDetails(recipe); }} // Stop propagation to prevent double click
                    className="mt-6 sm:mt-8 w-full bg-gradient-to-r from-lime-500 to-lime-700 text-white py-3 sm:py-4 px-5 sm:px-6 rounded-2xl hover:from-lime-600 hover:to-lime-800 transition duration-300 font-semibold shadow-lg transform hover:translate-y-[-3px] flex items-center justify-center gap-2 sm:gap-3 text-lg sm:text-xl"
                >
                    Voir la recette <i className="fas fa-arrow-right ml-2"></i>
                </button>
            </div>
        </div>
    );
}

export default RecipeCard;