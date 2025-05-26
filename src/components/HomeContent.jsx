// src/components/HomeContent.jsx
import React from 'react'; // Removed useEffect as it's no longer needed here
import { Link } from 'react-router-dom'; // Import Link for category navigation

// Import home page specific components
import SearchBar from './SearchBar';
import RecipeCard from './RecipeCard';
// Removed: import RecipeDetailModal from './RecipeDetailModal'; // No longer needed here

// Definition of the CategoryCard component OUTSIDE HomeContent
const CategoryCard = ({ categoryName, iconClass }) => {
    return (
        // Uses Link for navigation. The URL will be /categories/CategoryName
        <Link
            to={`/categories/${encodeURIComponent(categoryName)}`} // Encode the name for URLs
            className="bg-lime-50 rounded-xl shadow-md flex flex-col items-center text-center cursor-pointer
                       transition-all duration-300 ease-in-out p-4 sm:p-6
                       hover:scale-105 hover:shadow-xl hover:border-2 hover:border-lime-400 z-10" // Hover effects
        >
            <i className={`fas ${iconClass} text-4xl sm:text-5xl text-lime-600 mb-3`}></i>
            <span className="text-lg sm:text-xl font-semibold text-gray-800">{categoryName}</span>
        </Link>
    );
};


function HomeContent({
    currentRecipes,
    setCurrentRecipes, 
    loading,
    setLoading, 
    errorMessage,
    setErrorMessage, 
    selectedRecipe, // Still passed but not used directly in HomeContent's JSX
    setSelectedRecipe, // Still passed but not used directly in HomeContent's JSX
    isModalOpen, // Still passed but not used directly in HomeContent's JSX
    setIsModalOpen, // Still passed but not used directly in HomeContent's JSX
    fetchRecipes,
    openRecipeDetails, // Passed to RecipeCard
    closeModal, // Passed to RecipeDetailModal (which is now global)
    searchBarClearInputRef 
}) {

    // IMPORTANT: categoryExamples data is REMOVED from here.
    // It is now handled by CategoryPage.jsx which fetches real data.
    const categoryDisplayList = [
        { name: 'Végétarien', icon: 'fa-leaf' },
        { name: 'Fruits de Mer', icon: 'fa-fish' },
        { name: 'Volaille', icon: 'fa-drumstick-bite' },
        { name: 'Desserts', icon: 'fa-cookie-bite' },
        { name: 'Boulangerie', icon: 'fa-bread-slice' },
        { name: 'Rapide et Facile', icon: 'fa-pizza-slice' },
    ];


    return (
        <div className="container mx-auto p-6 sm:p-10 bg-white rounded-3xl shadow-2xl w-full max-w-6xl border border-amber-100 mt-20 sm:mt-24 mb-10">
            {/* Welcome and description section */}
            <section className="text-center mb-12 sm:mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-4 sm:mb-6">
                    Votre Guide Culinaire Personnalisé
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Découvrez des milliers de recettes délicieuses et saines en fonction des ingrédients que vous avez déjà. Fini le gaspillage, place à la créativité !
                </p>
            </section>

            {/* Search bar */}
            <SearchBar onSearch={fetchRecipes} isLoading={loading} setClearInputRef={searchBarClearInputRef} />
            <p className="text-center text-gray-500 mb-8 -mt-8 text-base sm:text-lg">
                Séparez les ingrédients par des virgules pour trouver des recettes combinées.
            </p>

            {/* Loading and error indicators / initial message */}
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

            {/* Message if no recipes are searched or found yet */}
            {!loading && !errorMessage && currentRecipes.length === 0 && (
                <>
                    <div className="col-span-full text-center py-10 sm:py-16">
                        <p className="text-2xl sm:text-3xl font-semibold text-gray-600">
                            Commencez par entrer des ingrédients pour trouver de délicieuses recettes !
                        </p>
                    </div>

                    {/* Popular Categories Section */}
                    <section className="mb-12 sm:mb-16">
                        <h3 className="text-2xl sm:text-3xl font-bold text-lime-700 text-center mb-8 sm:mb-10">
                            Explorez nos Catégories Populaires
                        </h3>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                            {categoryDisplayList.map(category => (
                                <CategoryCard
                                    key={category.name}
                                    categoryName={category.name}
                                    iconClass={category.icon}
                                />
                            ))}
                        </div>
                    </section>

                    {/* Quotes Section */}
                    <section className="bg-amber-50 p-8 sm:p-10 rounded-2xl shadow-inner border border-amber-200">
                        <h3 className="text-2xl sm:text-3xl font-bold text-amber-800 text-center mb-8 sm:mb-10">
                            Inspiration Culinaire
                        </h3>
                        <div className="space-y-8 sm:space-y-10">
                            <blockquote className="text-center text-xl sm:text-2xl italic text-gray-700 leading-relaxed">
                                "La cuisine est une forme d'art, et la nourriture est le support."
                                <p className="font-semibold mt-3 text-gray-600">- Wolfgang Puck</p>
                            </blockquote>
                            <blockquote className="text-center text-xl sm:text-2xl italic text-gray-700 leading-relaxed">
                                "On ne peut pas penser, aimer, dormir correctement si on n'a pas dîné correctement."
                                <p className="font-semibold mt-3 text-gray-600">- Virginia Woolf</p>
                            </blockquote>
                            <blockquote className="text-center text-xl sm:text-2xl italic text-gray-700 leading-relaxed">
                                "La nourriture est notre terrain d'entente, une expérience universelle."
                                <p className="font-semibold mt-3 text-gray-600">- James Beard</p>
                            </blockquote>
                        </div>
                    </section>
                </>
            )}

            {/* Display search results (if available) */}
            <div id="recipeResults" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mt-10">
                {currentRecipes.map((hit) => (
                    <RecipeCard key={hit.recipe.uri} recipe={hit.recipe} onViewDetails={openRecipeDetails} />
                ))}
            </div>
            {/* RecipeDetailModal is now rendered globally in App.js */}
        </div>
    );
}

export default HomeContent;
