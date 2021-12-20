import {Route, Routes as Switch} from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import {ROUTES} from "../constants/routes";
import Login from "../pages/Login";

const Routes = () => {
    return (
        <Switch>
            <Route path={ROUTES.main} element={<App />}>
                <Route index element={<Main />} />
                <Route path={ROUTES.login} element={<Login />} />
            </Route>
        </Switch>
    );
};

export default Routes;