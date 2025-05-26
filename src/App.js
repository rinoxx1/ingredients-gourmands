// src/App.js
import React, { useState, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your existing components (removed unused SearchBar and RecipeCard)
import Header from './components/Header';
import RecipeDetailModal from './components/RecipeDetailModal'; // Keep RecipeDetailModal import for global use
import Footer from './components/Footer';
import HomeContent from './components/HomeContent'; // Import HomeContent

// Import new page components
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import CategoryPage from './pages/CategoryPage'; // Import CategoryPage

function App() {
    // Your Edamam API keys
    const APP_ID = 'bbf78c38'; 
    const APP_KEY = '56bd36cda1fa6f259c612645adc79e88';
    const EDAMAM_USER_ID = 'Rinoxx1'; // Your Edamam User ID

    const [currentRecipes, setCurrentRecipes] = useState([]); // State for home page search results
    const [loading, setLoading] = useState(false); // Loading state for home page search
    const [errorMessage, setErrorMessage] = useState(''); // Error state for home page search

    // States for the global RecipeDetailModal
    const [selectedRecipe, setSelectedRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Create a ref to store a function that clears SearchBar's input
    const searchBarClearInputRef = useRef(null); 

    /**
     * Resets the main application state to its initial values,
     * effectively clearing home page search results, errors, and the search bar input.
     */
    const resetApp = useCallback(() => {
        setCurrentRecipes([]);
        setErrorMessage('');
        setLoading(false); // Ensure loading is false
        setSelectedRecipe(null); // Clear any selected recipe
        setIsModalOpen(false); // Close modal if open

        // Call the function stored in the ref to clear the search bar input
        if (searchBarClearInputRef.current) {
            searchBarClearInputRef.current();
        }
    }, []); // No dependencies, so this function is stable and won't cause unnecessary re-renders

    /**
     * Fetches recipes based on entered ingredients using Edamam API.
     * This function is specifically for the main search on the home page.
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
     * This function is passed to both HomeContent and CategoryPage.
     * @param {object} recipe - The recipe object to display details for.
     */
    const openRecipeDetails = useCallback((recipe) => {
        setSelectedRecipe(recipe);
        setIsModalOpen(true);
    }, []); // Stable function

    /**
     * Closes the recipe detail modal.
     * This function is passed to the RecipeDetailModal component.
     */
    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedRecipe(null);
    }, []); // Stable function

    return (
        <Router> {/* Wrap the entire application with Router */}
            <div className="flex flex-col min-h-screen">
                {/* Header is always visible */}
                <Header onLogoClick={resetApp} /> 
                
                <Routes> {/* Define routes here */}
                    {/* Home Page Route */}
                    <Route 
                        path="/" 
                        element={
                            <HomeContent
                                currentRecipes={currentRecipes}
                                setCurrentRecipes={setCurrentRecipes} // Still needed for HomeContent to manage its own search results
                                loading={loading}
                                setLoading={setLoading}
                                errorMessage={errorMessage}
                                setErrorMessage={setErrorMessage}
                                fetchRecipes={fetchRecipes} // Pass the main fetch function
                                openRecipeDetails={openRecipeDetails} // Pass modal opener
                                searchBarClearInputRef={searchBarClearInputRef} // Pass ref for search bar reset
                            />
                        } 
                    />

                    {/* Category Page Route - now dynamic and receives modal props */}
                    <Route 
                        path="/categories/:categoryName" 
                        element={
                            <CategoryPage
                                APP_ID={APP_ID}
                                APP_KEY={APP_KEY}
                                EDAMAM_USER_ID={EDAMAM_USER_ID}
                                openRecipeDetails={openRecipeDetails} // Pass modal opener
                            />
                        } 
                    />

                    {/* Static Pages Routes */}
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/terms-of-use" element={<TermsOfUse />} />
                    
                    {/* Catch-all route for 404 Not Found */}
                    <Route path="*" element={
                        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-4xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow text-center">
                            <h1 className="text-5xl font-extrabold text-red-600 mb-4">404</h1>
                            <p className="text-2xl text-gray-700">Oops! La page que vous recherchez n'existe pas.</p>
                            <a href="/" className="mt-8 inline-block bg-lime-600 text-white py-3 px-6 rounded-lg text-xl hover:bg-lime-700 transition duration-300">Retour à l'accueil</a>
                        </div>
                    } />
                </Routes>

                {/* RecipeDetailModal is now rendered globally, outside of Routes, so any page can trigger it */}
                {selectedRecipe && (
                    <RecipeDetailModal 
                        isOpen={isModalOpen} 
                        onClose={closeModal} 
                        recipe={selectedRecipe} 
                    />
                )}

                {/* Footer is always visible */}
                <Footer />
            </div>
        </Router>
    );
}

export default App;
