import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';

export function useAppDispatch() {
    return useDispatch<AppDispatch>();
}

export default useAppDispatch;
