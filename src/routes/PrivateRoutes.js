import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import SLUGS from "../resources/slug";
import Error from "../view/error";
import Dashboard from "../view/dasboard/dashboard";
import User from "../view/dasboard/user";
import Student from "../view/dasboard/student";
import SyncLoader from "react-spinners/SyncLoader";
const IndexComponent = lazy(() => import('../view/dasboard/index'));

function PrivateRoutes() {
    
    return (
             <Suspense fallback={<div className="sweet-loading"> <SyncLoader color='#0bb988' size={100} /></div>}>
                <Routes>
                    <Route path={SLUGS.dashboard} element={<IndexComponent/>}>
                        <Route path={SLUGS.dashboard} element={<Dashboard/>}/>
                        <Route path={SLUGS.users} element={<User/>}/>
                        <Route path={SLUGS.student_user} element={<Student/>}/>
                    </Route>
                    <Route path="*" element={<Error/>}/>
                </Routes>
            </Suspense>
    );
}

export default PrivateRoutes;