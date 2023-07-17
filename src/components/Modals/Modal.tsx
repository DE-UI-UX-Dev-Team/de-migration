import React, { ReactNode } from 'react';

interface ModalProps {
    children: ReactNode;
    header?: string;
    containerClassName?: string;
    columnClassName?: string;
    btnprimary?: string;
    btnsecondary?: string;
    withCloseIcon?: boolean;
    withexclamationIcon?: boolean;
    isOpen?: boolean;
    onClose?: () => void;
}

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
    btnprimary,
    btnsecondary,
    withCloseIcon,
    withexclamationIcon,
    onClose,
}) => {
    return (
        <div className={columnClassName}>
            <div className="modal-head">
                <h4 className="header-with-icon">
                    <div>
                        {withexclamationIcon && <i className="fa fa-exclamation-circle clr--error-element"></i>}
                        {header}
                    </div>
                    {withCloseIcon && (
                        <i
                            className="fa-regular fa-xmark fa-xl"
                            onClick={onClose}
                        ></i>
                    )}
                </h4>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col">{children}</div>
                </div>
            </div>
            <div className="modal-footer">
                {btnprimary && <button className="btn--primary">{btnprimary}</button>}
                {btnsecondary && <button className="btn--secondary">{btnsecondary}</button>}
            </div>
        </div>
    );
};
