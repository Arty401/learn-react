import {useAppDispatch} from "../../../hooks";
import {bindActionCreators} from "redux";
import {phonesActions} from "../redux/actions";

const usePhonesActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(phonesActions, dispatch);
}

export default usePhonesActions;