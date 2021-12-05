import React, { useRef, useState } from "react";
import classes from "./SearchInput.module.scss";

const SearchInput = () => {
  const [inputIsClick, setInputIsClicked] = useState(false);
  const textRef = useRef();
  const inputRef = useRef();

  const handleClickInput = () => {
    setInputIsClicked(true);
    inputRef.current.focus();
  };

  const handleBlurInput = () => {
    setInputIsClicked(false);
  }

  return (
    <div className={classes.search}>
      <input ref={inputRef} type="text" placeholder="Search" onBlur={handleBlurInput}/>
      {!inputIsClick && (
        <div
          ref={textRef}
          className={classes.fakePlaceholder}
          onClick={handleClickInput}
        >
          <i className="fas fa-search" />
          <span className={classes.text}>Search</span>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
