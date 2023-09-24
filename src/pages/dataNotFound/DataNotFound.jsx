// DataNotFound.js
import React from 'react';

const DataNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <svg
                className="w-16 h-16 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 21v-4M17 21v-4M3 11a9 9 0 0118 0h-2a7 7 0 00-14 0H3z"
                />
            </svg>
            <p className="mt-2 text-lg text-gray-600 font-semibold">No data found</p>
        </div>
    );
};

export default DataNotFound;
