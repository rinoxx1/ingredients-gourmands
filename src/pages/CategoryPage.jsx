// src/pages/CategoryPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard'; // Import RecipeCard

// CategoryPage component receives API keys and modal opener function as props from App.js
function CategoryPage({ APP_ID, APP_KEY, EDAMAM_USER_ID, openRecipeDetails }) {
    // Get the category name from the URL parameters
    const { categoryName: encodedCategoryName } = useParams();
    const categoryName = decodeURIComponent(encodedCategoryName); // Decode URL-encoded category name

    // State to store recipes fetched for this specific category
    const [categoryRecipes, setCategoryRecipes] = useState([]);
    // State for loading indicator specific to this page's API call
    const [loading, setLoading] = useState(false);
    // State for error messages specific to this page's API call
    const [errorMessage, setErrorMessage] = useState('');

    // useEffect hook to fetch recipes when the component mounts or categoryName/API keys change
    useEffect(() => {
        const fetchCategoryRecipes = async () => {
            setLoading(true); // Set loading to true before fetching
            setErrorMessage(''); // Clear any previous error messages
            setCategoryRecipes([]); // Clear previous recipes

            // Use the categoryName from the URL as the search query for the API
            const query = categoryName;
            // Construct the API URL. We limit results to 5 using 'from' and 'to' parameters
            // encodeURIComponent is used to ensure the query is safely formatted for a URL
            const apiUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=5`;

            try {
                // Make the API call to Edamam
                const response = await fetch(apiUrl, {
                    headers: {
                        'Edamam-Account-User': EDAMAM_USER_ID // Include the required custom header
                    }
                });

                // Check if the HTTP response was successful
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`Erreur HTTP ! statut : ${response.status} - ${errorData.message || 'Erreur inconnue'}`);
                }

                // Parse the JSON response
                const data = await response.json();

                // If hits are found, update the categoryRecipes state
                if (data.hits && data.hits.length > 0) {
                    setCategoryRecipes(data.hits);
                } else {
                    // If no recipes are found, set an appropriate error message
                    setErrorMessage(`Aucune recette trouvée pour la catégorie "${categoryName}".`);
                }
            } catch (error) {
                // Catch and log any errors during the fetch process
                console.error(`Erreur lors de la récupération des recettes pour ${categoryName} :`, error);
                setErrorMessage(`Échec de la récupération des recettes pour "${categoryName}" : ${error.message}.`);
            } finally {
                setLoading(false); // Set loading to false after fetch completes (success or error)
            }
        };

        // Only initiate the fetch if all required API keys are provided
        if (APP_ID && APP_KEY && EDAMAM_USER_ID) {
            fetchCategoryRecipes();
        } else {
            setErrorMessage('Les clés API Edamam ne sont pas configurées.');
        }

    }, [categoryName, APP_ID, APP_KEY, EDAMAM_USER_ID]); // Dependencies array: re-run useEffect if these values change

    return (
        // Main container for the category page content
        // min-h-[60vh] ensures the container has a minimum height for better layout
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-6xl border border-amber-100 mt-20 sm:mt-24 mb-10 flex-grow">
            {/* Page title displaying the current category name */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-8 sm:mb-10 text-center">
                Recettes pour la catégorie : <span className="text-lime-700">{categoryName}</span>
            </h2>

            {/* Loading indicator */}
            {loading && (
                <div className="flex justify-center items-center py-10 sm:py-12">
                    <div className="loader"></div> {/* Tailwind CSS loader */}
                    <span className="ml-4 sm:ml-6 text-xl sm:text-2xl font-medium text-gray-600">Chargement des recettes...</span>
                </div>
            )}

            {/* Error message display */}
            {errorMessage && (
                <div className="col-span-full text-center py-10 sm:py-16">
                    <p className="text-2xl sm:text-3xl font-semibold text-red-500">{errorMessage}</p>
                </div>
            )}

            {/* Message if no recipes are found after loading and no error */}
            {!loading && !errorMessage && categoryRecipes.length === 0 && (
                <div className="col-span-full text-center py-10 sm:py-16">
                    <p className="text-2xl sm:text-3xl font-semibold text-gray-600">
                        Aucune recette trouvée pour cette catégorie.
                    </p>
                </div>
            )}

            {/* Grid to display RecipeCard components */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
                {/* Map through the fetched recipes and render a RecipeCard for each */}
                {categoryRecipes.map((hit) => (
                    <RecipeCard key={hit.recipe.uri} recipe={hit.recipe} onViewDetails={openRecipeDetails} />
                ))}
            </div>
        </div>
    );
}

export default CategoryPage;
