import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store";

export {default as useAuth} from 'src/features/auth/hooks/useAuth';
export {default as usePrevious} from './usePrevious';
export {default as usePhones} from 'src/features/phones/hooks/usePhones'
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector