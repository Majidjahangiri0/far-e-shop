import './Modal.css'

import ReactDOM from 'react-dom'

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.hideLoginHandler} />
}

const ModalOverlay = (props) => {
  return (
    <div className="modall">
      <div className="content">{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop hideLoginHandler={props.hideLoginHandler} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
