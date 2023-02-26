import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import { ModalBackdrop, ModalWindow } from './Modal.styled';
import { useEffect } from 'react';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
    useEffect(() => {
        const handleEscape = e => {
            if (e.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [onClose]);

    const handleBackdrop = e => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return createPortal(
        <ModalBackdrop onClick={handleBackdrop}>
            <ModalWindow>{children}</ModalWindow>
        </ModalBackdrop>,
        modalRoot
    );
};

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node,
};
