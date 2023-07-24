import React from 'react';
import { ModalProps } from '../../interfaces/Props';

export const ModalContainer: React.FC<ModalProps> = ({ children, containerClassName, isOpen, onClose }) => {
    if (!isOpen) {
        return null;
    }

    const activeClass = isOpen ? 'active' : '';

    return (
        <div
            onClick={onClose}
            className={`modal-overlay ${activeClass}`}
        >
            <div
                className={`${containerClassName} ${activeClass}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="row">{children}</div>
            </div>
        </div>
    );
};

export const ModalColumn: React.FC<ModalProps> = ({
    header,
    children,
    columnClassName,
    btnPrimary,
    btnSecondary,
    iconClassName,
    withExclamationIcon,
    onClose,
    isDisabled = false,
    shouldCloseModal = true,
}) => {
    const btnSecondaryOnClick = shouldCloseModal ? onClose : undefined;

    return (
        <div className={columnClassName}>
            <div className="modal-head">
                <h4 className="header-with-icon">
                    <div>
                        {withExclamationIcon && <i className="fa fa-exclamation-circle clr--error-element"></i>}
                        {header}
                    </div>
                    <i
                        className={`fa-regular fa-xmark fa-xl ${iconClassName}`}
                        onClick={onClose}
                    ></i>
                </h4>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">{children}</div>
                </div>
            </div>
            <div className="modal-footer">
                {btnPrimary && (
                    <button
                        className="btn--primary"
                        disabled={isDisabled}
                    >
                        {btnPrimary}
                    </button>
                )}
                {btnSecondary && (
                    <button
                        className="btn--secondary"
                        onClick={btnSecondaryOnClick}
                    >
                        {btnSecondary}
                    </button>
                )}
            </div>
        </div>
    );
};
