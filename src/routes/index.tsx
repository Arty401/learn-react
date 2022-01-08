import {Route, Routes as RoutesComponent} from "react-router-dom";
import App from "../App";
import Main from "../pages/Main";
import {ROUTES} from "../constants/routes";
import Login from "../pages/Login";
import PrivateRoute from "./Private";
import UnPrivateRoute from "./UnPrivate";
import PhonesItemDetail from "../features/phones/components/PhonesItemDetail";
import Create from "../pages/Phones/Create";
import Edit from "../pages/Phones/Edit";

const Routes = () => {
    return (
        <RoutesComponent>
            <Route path={ROUTES.main} element={<App />}>
                <Route index element={<PrivateRoute component={<Main />} />} />
                <Route path={ROUTES.phones.show()} element={<PrivateRoute component={<PhonesItemDetail />} />} />
                <Route path={ROUTES.phones.create} element={<PrivateRoute component={<Create />} />} />
                <Route path={ROUTES.phones.edit()} element={<PrivateRoute component={<Edit />} />} />
                <Route path={ROUTES.login} element={<UnPrivateRoute component={<Login />} />} />
            </Route>
        </RoutesComponent>
    );
};

export default Routes;
