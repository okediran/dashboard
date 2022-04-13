import { Route, Routes} from 'react-router-dom';
import SLUGS from "../resources/slug";
import Register  from "../view/Register";
import Sucessful from "../view/sucessful";
import Login from "../view/Login";
import Error from "../view/error";
function PublicRoutes() {
    return (
        <Routes>
            <Route path={SLUGS.register} element={ <Register/>} />
            <Route path={SLUGS.succesful} element={ < Sucessful/>} />
            <Route path={SLUGS.login} element={ < Login/>} />
            <Route path="*" element={<Error/>}/>
        </Routes>
    );
}

export default PublicRoutes;