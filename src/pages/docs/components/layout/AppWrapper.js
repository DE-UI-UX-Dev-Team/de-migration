import React, { useEffect } from 'react';
import { initExpandables } from 'expandables-js/expandables';

function AppWrapper({ children }) {
    useEffect(() => {
        // Code to run after all components have been rendered
        initExpandables();
    }, []);

    return children;
}

export default AppWrapper;
