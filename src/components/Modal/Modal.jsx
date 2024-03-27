import React from 'react';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import styles from './Modal.module.css';
import image from '../../images/icon.png';

const Modal = ({children, setIsModalOpen}) => {

  const closingOrderDetails = () => {
    setIsModalOpen(false)
  };


  return (
    <>
      <ModalOverlay/>
      <div className={styles.modal}>
        <div className={styles.modalClosing} onClick={closingOrderDetails}>
          <img src={image} alt="Image" />
        </div>
        {children}
      </div>
    </>
  )
};


export default Modal;