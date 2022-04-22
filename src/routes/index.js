import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PublicRoutes from "./PublicRoutes";
import PrivateRoutes from "./PrivateRoutes";
import { useSelector } from "react-redux";

function Routes() {
    const { pathname } = useLocation();
    
    const isLogged = useSelector(state => state.isLogged);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return ( 
            <div>
                { isLogged ?  <PublicRoutes /> :   <PrivateRoutes/>}
            </div>
        ); 
}

export default Routes;
