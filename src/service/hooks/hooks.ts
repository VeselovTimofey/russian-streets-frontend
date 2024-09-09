import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../utils/types/storeTypes';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
