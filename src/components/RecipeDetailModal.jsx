// src/components/RecipeDetailModal.jsx
import React from 'react';

function RecipeDetailModal({ isOpen, onClose, recipe }) {
    if (!isOpen || !recipe) return null;

    const imageUrl = recipe.image || `https://placehold.co/800x400/FFF8E1/80cbc4?text=${encodeURIComponent(recipe.label)}`;

    return (
        <div className="modal" style={{ display: isOpen ? 'flex' : 'none' }}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                <h2 id="modalRecipeTitle" className="text-3xl sm:text-5xl font-bold text-gray-800 mb-6 sm:mb-8 text-center leading-tight">{recipe.label}</h2>
                <img 
                    id="modalRecipeImage" 
                    src={imageUrl} 
                    alt={recipe.label} 
                    className="w-full h-64 sm:h-96 object-cover rounded-2xl mb-8 sm:mb-10 shadow-xl border border-gray-200"
                    onError={(e) => { e.target.onerror = null; e.target.src = `https://placehold.co/800x400/FFF8E1/80cbc4?text=Image+introuvable`; }}
                />
                <div className="mb-8 sm:mb-10 p-5 sm:p-6 bg-amber-50 rounded-xl border border-amber-200">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-amber-800 mb-4 sm:mb-5 flex items-center"><i className="fas fa-list-ul mr-3 sm:mr-4 text-amber-600"></i> Ingrédients :</h3>
                    <ul id="modalIngredientsList" className="list-disc list-inside text-gray-700 text-base sm:text-xl leading-relaxed space-y-2 sm:space-y-3 pl-4 sm:pl-6">
                        {recipe.ingredientLines && recipe.ingredientLines.length > 0 ? (
                            recipe.ingredientLines.map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))
                        ) : (
                            <li className="text-gray-500">Aucun ingrédient détaillé disponible.</li>
                        )}
                    </ul>
                </div>
                <div className="p-5 sm:p-6 bg-lime-50 rounded-xl border border-lime-200">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-lime-800 mb-4 sm:mb-5 flex items-center"><i className="fas fa-info-circle mr-3 sm:mr-4 text-lime-600"></i> Instructions :</h3>
                    <div id="modalInstructions" className="prose max-w-none text-gray-700 text-base sm:text-xl leading-relaxed">
                        <p className="text-gray-700 mb-4 sm:mb-5">Les instructions complètes sont disponibles sur le site d'origine de la recette :</p>
                        <a href={recipe.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-lime-500 to-lime-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:from-lime-600 hover:to-lime-800 transition duration-300 font-semibold shadow-md transform hover:scale-105 text-base sm:text-xl">
                            Voir les instructions complètes <i className="fas fa-external-link-alt ml-2 sm:ml-3"></i>
                        </a>
                    </div>
                </div>
                <p className="text-sm text-gray-500 mt-8 sm:mt-10 text-center italic">
                    Note : Les noms de recettes, les ingrédients et les instructions sont fournis par l'API Edamam et peuvent être en anglais. Les instructions complètes sont souvent sur le site d'origine.
                </p>
            </div>
        </div>
    );
}

export default RecipeDetailModal;