import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";


const Backdrop = (props) => {
  return <div className={classes.backdrop}  onClick={props.onClose}/>;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  //create pop-up using react portals - define (what to portal, where to portal(in index html id = overlays))
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};
export default Modal;
