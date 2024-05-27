import React, { useEffect } from 'react';

export default function FatmapEmbed({ type, id, animation }) {
    useEffect(() => {
        // Create script element
        const script = document.createElement('script');
        script.src = 'https://embeds.fatmap.com/embed.js';
        script.defer = true;

        // Append script to the body
        document.body.appendChild(script);

        // Cleanup function to remove script from the body when component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []); // Empty dependency array ensures this runs once on mount

    return (
        <div class="fatmap-embed-placeholder" data-animation="rotate" data-type="adventure" data-id="417587"></div>
    );
};