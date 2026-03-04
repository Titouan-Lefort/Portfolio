import React, { useState, useEffect } from 'react';
import './PageLoader.css';

const PageLoader = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // L'animation complète dure environ 2 secondes
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="page-loader">
                    <div className="loader-background"></div>
                </div>
            )}
            <div className={`page-content ${isLoading ? 'loading' : 'loaded'}`}>
                {children}
            </div>
        </>
    );
};

export default PageLoader;
