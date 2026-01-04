import React, { useEffect, useState } from 'react';

const RandomQuote = () => {
    // Initialize data as null to handle the single object response
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchQuote = async () => {
        setLoading(true);
        setError(null);
        try {
            // FIXED: Use the /random endpoint for one quote at a time
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json();
            setData(result); // result is now a single object: { id, quote, author }
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <div className="p-10 text-center">
            <h1 className="text-2xl font-bold mb-4">Random Quote</h1>
            
            <button 
                onClick={fetchQuote} 
                className="border-2 rounded-lg p-3 bg-blue-500 text-white"
                disabled={loading}
            >
                {loading ? 'Loading...' : 'Get New Quote'}
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}

            {/* FIXED: Conditional rendering for the single object (no .map() needed) */}
            {data && (
                <div className="mt-8 p-6 border rounded-xl shadow-sm">
                    <p className="text-xl italic">"{data.quote}"</p>
                    <p className="mt-2 font-semibold">- {data.author}</p>
                </div>
            )}
        </div>
    );
};

export default RandomQuote;
