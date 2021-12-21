import {Route, Routes as RoutesComponent} from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import {ROUTES} from "../constants/routes";
import Login from "../pages/Login";
import PrivateRoute from "./Private";
import UnPrivateRoute from "./UnPrivate";

const Routes = () => {
    return (
        <RoutesComponent>
            <Route path={ROUTES.main} element={<App />}>
                <Route index element={<Main />} />
                <Route path={ROUTES.login} element={<UnPrivateRoute component={<Login />} />} />
                <Route path={ROUTES.phones} element={<PrivateRoute component={<Main />} />} />
            </Route>
        </RoutesComponent>
    );
};

export default Routes;