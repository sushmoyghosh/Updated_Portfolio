import React, { useEffect, useState } from 'react';
import {AiOutlineArrowUp} from 'react-icons/ai';

const BackToTop = () => {
    const [showBackButton, setShowBackButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setShowBackButton(true);
            } else {
                setShowBackButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="back-to-top-container">
            {showBackButton && (
                <button className="back-to-top-button animate-bounce bg-primaryColor text-white hover:bg-headingColor " onClick={scrollUp}>
                <AiOutlineArrowUp/>
                </button>
            )}
        </div>
    );
};

export default BackToTop;
