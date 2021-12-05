import { useContext, useRef } from 'react';
import NavigationIconContext from '../store/NavigationIconContext';

const useFillIcon = () => {
  const ref = useRef();
  const [,dispatch] = useContext(NavigationIconContext)

  const handleClick = () => {
    dispatch({ type: 'SET_ACTIVE', id: ref.current.id})
  }

  return {
    ref,
    handleClick,
  }
};

export default useFillIcon;