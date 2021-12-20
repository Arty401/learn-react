import {Route, Routes as Switch} from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import {ROUTES} from "../constants/routes";

const Routes = () => {
    return (
        <Switch>
            <Route path={ROUTES.main} element={<App />}>
                <Route index element={<Main />} />
            </Route>
        </Switch>
    );

};

export default Routes;