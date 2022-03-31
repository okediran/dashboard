import { Route, Routes, Navigate } from 'react-router-dom';
// import React, { Suspense, lazy } from 'react';
import SLUGS from "../resources/slug";
import Register  from "../view/Register";
import Sucessful from "../view/sucessful";
function PublicRoutes() {
    return (
        <Routes>
            <Route path={SLUGS.register} element={ <Register/>} />
            <Route path={SLUGS.succesful} element={ < Sucessful/>} />
            <Route path="*" element={<Navigate to="/register" replace />}/>
        </Routes>
    );
}

export default PublicRoutes;