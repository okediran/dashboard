import { Route, Routes } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';
import SLUGS from "../resources/slug";
import Error from "../view/error";
import Index from "../view/dasboard/index";
import Dashboard from "../view/dasboard/dashboard";
function PrivateRoutes() {
    return (
        <div>
            <Routes>
                <Route path={SLUGS.dashboard} element={<Index/>}>
                    <Route path={SLUGS.dashboard} element={<Dashboard/>}/>
                </Route>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default PrivateRoutes;