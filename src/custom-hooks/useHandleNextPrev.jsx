import React, { useRef, useState } from 'react';

const useHandleNextPrev = (index, data) => {
  const [displayedItem, setDisplayedItem] = useState(data[index]);
  const counter = useRef(index);

  const handleNextItem = () => {
    if (counter.current >= data.length - 1 ) {
      return;
    }
    counter.current = counter.current + 1;
    setDisplayedItem(data[counter.current]);
  };

  const handlePrevItem = () => {
    if (counter.current <= 0) return;
    counter.current = counter.current - 1;
    setDisplayedItem(data[counter.current]);
  };
   return (
      {
         handleNextItem,
         handlePrevItem,
         displayedItem,
         counter : counter.current
      }
   );
};

export default useHandleNextPrev;