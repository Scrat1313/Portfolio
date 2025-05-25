import { useEffect } from "react";

/**
 * Hook pour mettre à jour dynamiquement le titre de la page.
 * @param {string} title - Le titre de la page 
 */

const usePageTitle = (title) => {
    useEffect(() => {
        document.title = `Alain Patrick | ${title}`;
    }, [title]);
};

export default usePageTitle;