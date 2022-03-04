import {
  useDispatch as useReactReduxDispatch,
  useSelector as UseReactReduxSelector,
} from 'react-redux';

export const useDispatch = () => useReactReduxDispatch();
export const useSelector = UseReactReduxSelector;
