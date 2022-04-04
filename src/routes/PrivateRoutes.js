import { Route, Routes, Navigate } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';
import SLUGS from "../resources/slug";
import Dashboard from "../view/dasboard/dashboard";
import Error from "../view/error";
function PrivateRoutes() {
    return (
        <div>
            <Routes>
                <Route path={SLUGS.dashboard} element={ <Dashboard/>} />
                <Route path="*" element={<Navigate to="/dashboard" replace />}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </div>
    );
}

export default PrivateRoutes;