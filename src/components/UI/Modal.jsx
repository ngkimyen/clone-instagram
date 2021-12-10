import React, { useContext } from "react";
import { createPortal } from "react-dom";
import NavigationIconContext from "../../store/NavigationIconContext";
import Backdrop from "./Backdrop";

const Modal = ({
  overlay,
  noBackdrop = false,
  isShow,
  onClose,
  isUnderRoot,
  
}) => {

  return (
    <>
      {isShow && isUnderRoot ? (
        createPortal(
          <>
            {!noBackdrop && <Backdrop onClick={onClose} />}
            {overlay}
          </>,
          document.getElementById("modal-root")
        )
      ) : (
        <>
          {!noBackdrop && <Backdrop onClick={onClose} />}
          {overlay}
        </>
      )}
    </>
  );
};

export default Modal;
