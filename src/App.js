// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import RecipeDetailModal from './components/RecipeDetailModal';
import Footer from './components/Footer';

function App() {
    // Vos clés API Edamam
    // Pour un usage en production, il est recommandé d'utiliser des variables d'environnement
    // (par exemple, via un fichier .env.local et process.env.REACT_APP_APP_ID si vous utilisez Create React App,
    // ou import.meta.env.VITE_APP_ID si vous utilisez Vite).
    const APP_ID = 'bbf78c38'; 
    const APP_KEY = '56bd36cda1fa6f259c612645adc79e88';
    const EDAMAM_USER_ID = 'Rinoxx1'; // Votre ID utilisateur Edamam

    const [currentRecipes, setCurrentRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /**
     * Fetches recipes based on entered ingredients using Edamam API.
     * @param {string} ingredientsInput - Comma-separated string of ingredients.
     */
    const fetchRecipes = async (ingredientsInput) => {
        const ingredients = ingredientsInput.split(',').map(item => item.trim()).filter(item => item !== '');

        if (ingredients.length === 0) {
            setErrorMessage('Veuillez entrer au moins un ingrédient pour trouver des recettes.');
            setCurrentRecipes([]);
            return;
        }

        if (!APP_ID || !APP_KEY || !EDAMAM_USER_ID) {
            setErrorMessage('Les clés APP_ID, APP_KEY ou EDAMAM_USER_ID pour Edamam ne sont pas configurées.');
            return;
        }

        setLoading(true);
        setErrorMessage('');
        setCurrentRecipes([]); // Clear previous results

        try {
            const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredients.join(',')}&app_id=${APP_ID}&app_key=${APP_KEY}`;
            
            const response = await fetch(apiUrl, {
                headers: {
                    'Edamam-Account-User': EDAMAM_USER_ID
                }
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(`Erreur HTTP ! statut : ${response.status} - ${errorData.message || 'Erreur inconnue'}`);
            }
            const data = await response.json();
            
            if (data.hits && data.hits.length > 0) {
                setCurrentRecipes(data.hits);
            } else {
                setErrorMessage('Aucune recette trouvée avec ces ingrédients. Essayez différentes combinaisons ou moins d\'ingrédients !');
            }

        } catch (error) {
            console.error('Erreur lors de la récupération des recettes :', error);
            setErrorMessage(`Échec de la récupération des recettes : ${error.message}. Veuillez vérifier vos clés API Edamam, votre ID utilisateur, ou réessayer plus tard.`);
        } finally {
            setLoading(false);
        }
    };

    /**
     * Opens the modal and displays full recipe details.
     * @param {object} recipe - The recipe object to display details for.
     */
    const openRecipeDetails = (recipe) => {
        setSelectedRecipe(recipe);
        setIsModalOpen(true);
    };

    /**
     * Closes the recipe detail modal.
     */
    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedRecipe(null);
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-6xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
                <SearchBar onSearch={fetchRecipes} isLoading={loading} />

                {loading && (
                    <div id="loadingIndicator" className="flex justify-center items-center py-10 sm:py-12">
                        <div className="loader"></div>
                        <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-medium text-gray-600">Recherche de recettes en cours...</span>
                    </div>
                )}

                {errorMessage && (
                    <div className="col-span-full text-center py-10 sm:py-16">
                        <p className="text-2xl sm:text-3xl font-semibold text-red-500">{errorMessage}</p>
                    </div>
                )}

                {!loading && !errorMessage && currentRecipes.length === 0 && (
                    <div className="col-span-full text-center py-10 sm:py-16">
                        <p className="text-2xl sm:text-3xl font-semibold text-gray-600">
                            Commencez par entrer des ingrédients pour trouver de délicieuses recettes !
                        </p>
                    </div>
                )}

                <div id="recipeResults" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                    {currentRecipes.map((hit) => (
                        <RecipeCard key={hit.recipe.uri} recipe={hit.recipe} onViewDetails={openRecipeDetails} />
                    ))}
                </div>

                {selectedRecipe && (
                    <RecipeDetailModal 
                        isOpen={isModalOpen} 
                        onClose={closeModal} 
                        recipe={selectedRecipe} 
                    />
                )}
            </div>
            <Footer />
        </div>
    );
}

export default App;