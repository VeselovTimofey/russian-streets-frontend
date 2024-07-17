import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../types';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
