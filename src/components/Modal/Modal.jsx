// components/Modal/Modal.jsx
import { useEffect } from 'react';
import css from './Modal.module.css';

const Modal = ({ children, onClose }) => {
  useEffect(() => {
    const handleEsc = e => {
      if (e.code === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={css.backdrop} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>
  );
};

export default Modal;
