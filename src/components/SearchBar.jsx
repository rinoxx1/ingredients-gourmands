// src/components/SearchBar.jsx
import React, { useState, useEffect } from 'react'; // Import useEffect

// Accept setClearInputRef prop
function SearchBar({ onSearch, isLoading, setClearInputRef }) {
    const [inputValue, setInputValue] = useState('');

    // Use useEffect to expose the clear function to the parent via the ref
    useEffect(() => {
        if (setClearInputRef) {
            setClearInputRef.current = () => setInputValue('');
        }
        // Cleanup function for the ref, important if component unmounts
        return () => {
            if (setClearInputRef) {
                setClearInputRef.current = null;
            }
        };
    }, [setClearInputRef]); // Re-run if setClearInputRef changes

    const handleSearch = () => {
        onSearch(inputValue);
        // Clear input after search is initiated
        setInputValue(''); 
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex justify-center mb-12 sm:mb-16">
            <div className="flex items-center w-full max-w-2xl gap-4">
                <input
                    type="text"
                    id="ingredientInput"
                    placeholder="Entrez les ingrédients (ex: poulet, pâtes)"
                    className="flex-1 p-3 sm:p-4 border-2 border-lime-300 rounded-full shadow-md focus:outline-none focus:ring-4 focus:ring-lime-400 text-lg sm:text-xl placeholder-gray-400 bg-white"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    aria-label="Rechercher"
                />
                <button
                    id="searchButton"
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-lime-500 to-lime-700 text-white font-bold rounded-full shadow-md hover:from-lime-600 hover:to-lime-800 focus:outline-none focus:ring-4 focus:ring-lime-500 focus:ring-offset-2 transition duration-300 transform hover:scale-110 flex items-center justify-center text-xl sm:text-2xl"
                    onClick={handleSearch}
                    disabled={isLoading}
                    aria-label="Rechercher"
                >
                    <i className="fas fa-search text-white"></i>
                </button>
            </div>
        </div>
    );
}

export default SearchBar;