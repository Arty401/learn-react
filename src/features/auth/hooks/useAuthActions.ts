import {useAppDispatch} from "../../../hooks";
import {bindActionCreators} from "redux";
import {authActions} from "../redux/actions";

const useAuthActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(authActions, dispatch);
};

export default useAuthActions;