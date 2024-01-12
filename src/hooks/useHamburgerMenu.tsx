import { useState, useEffect } from 'react';

const useHamburgerMenu = () => {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

    useEffect(() => {
        // Cleanup function
        return () => {
            document.body.style.overflowY = 'unset';
            document.documentElement.style.overflowY = 'unset';
        };
    }, [isHamburgerOpen]);

    const toggleHamburgerMenu = () => {
        setIsHamburgerOpen((prev) => !prev);
    };

    return { isHamburgerOpen, toggleHamburgerMenu };
};

export default useHamburgerMenu;
