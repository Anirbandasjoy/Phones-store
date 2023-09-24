import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen flex items-center justify-center">
            <div className="text-center text-white">
                <h1 className="text-6xl font-extrabold mb-4">404</h1>
                <p className="text-2xl mb-4">Oops! This page doesn't exist.</p>
                <p className="text-lg mb-8">But don't worry, you can find your way back.</p>
                <Link
                    to="/"
                    className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 text-white text-lg font-semibold px-8 py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Go Home
                </Link>

            </div>
        </div>
    );
};

export default NotFoundPage;
