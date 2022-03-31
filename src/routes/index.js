import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';
import PublicRoutes from "./PublicRoutes";
function Routes() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return <PublicRoutes />;
}

export default Routes;
// isUserLoggedIn ? <PrivateSection /> : 