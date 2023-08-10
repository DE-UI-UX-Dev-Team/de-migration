import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RadioInputGroup from '../../../components/Forms/RadioInput';
import { initialModals, moalTextInput, radioPaymentMethod, radioServiceLocation } from '../../../config/modalsData';
import { ModalColumn, ModalContainer } from '../../../components/Modals/Modal';
import TextInput from '../../../components/Forms/TextInput';
import { modalContent } from '../../../local/en/modals/constants';

const App: React.FC = () => {
    const [modals, setModals] = useState(initialModals);
    const [radioSelected, setRadioSelected] = useState<boolean>(false);

    const handleModalOpen = (modalName: string) => {
        setModals(
            modals.map((modal) =>
                modal.name === modalName ? { ...modal, isActive: true } : { ...modal, isActive: false }
            )
        );
    };

    const handleModalClose = () => {
        setModals(modals.map((modal) => ({ ...modal, isActive: false })));
        setRadioSelected(false);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioSelected(e.target.value !== '');
    };

    const getModal = (modalName: string) => modals.find((modal) => modal.name === modalName);

    return (
        <>
            <section>
                <div className="container">
                    <div className="row fs--text-center">
                        <div className="col">
                            <h2>Modals</h2>
                            <p>Please click on the below buttons to open modal.</p>
                        </div>
                        <div className="col">
                            <div className="row">
                                {modals.map((modal, index) => (
                                    <div
                                        key={index}
                                        className="col--md-4 col--lg-4"
                                    >
                                        <button onClick={() => handleModalOpen(modal.name)}>{modal.name}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal-box">
                <ModalContainer
                    containerClassName={`modal-container-react container max-width--sm`}
                    isOpen={getModal('basic Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.confirm}
                        columnClassName="col modal-col"
                        btnPrimary={modalContent.btn.confirm}
                        btnCloseSecondary={modalContent.btn.cancel}
                        onClose={handleModalClose}
                    >
                        <p>{modalContent.info.paymentMethod}</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react`}
                    isOpen={getModal('payment Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.confirm}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modalContent.btn.continue}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <>
                            <h5>{modalContent.info.plan}</h5>
                            <p>{modalContent.info.paymentAddress}</p>
                        </>
                    </ModalColumn>
                    <ModalColumn
                        header={modalContent.header.isCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modalContent.btn.continue}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>{modalContent.info.description}</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react`}
                    isOpen={getModal('form Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.newCustomer}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modalContent.btn.continue}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <form>
                            <div className="row">
                                <div className="col">
                                    <h5>{modalContent.info.plan}</h5>
                                    <p>{modalContent.info.paymentAddress}</p>
                                </div>
                                {moalTextInput.map((input) => (
                                    <TextInput
                                        key={input.id}
                                        {...input}
                                    />
                                ))}
                            </div>
                        </form>
                    </ModalColumn>
                    <ModalColumn
                        header={modalContent.header.isCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modalContent.btn.continue}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>{modalContent.info.description}</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react container max-width--sm`}
                    isOpen={getModal('location Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.selectLocation}
                        columnClassName="col modal-col"
                        btnPrimary={modalContent.btn.proceed}
                        btnCloseSecondary={modalContent.btn.cancel}
                        onClose={handleModalClose}
                        withExclamationIcon={<i className="fa fa-exclamation-circle clr--error-element"></i>}
                        isDisabled={!radioSelected}
                    >
                        <form>
                            <RadioInputGroup
                                className="mg-l--0"
                                radioData={radioServiceLocation}
                                onChange={handleRadioChange}
                            />
                        </form>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react`}
                    isOpen={getModal('no Service Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.noService}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modalContent.btn.zipcode}
                        btnCloseSecondary={modalContent.btn.back}
                        withExclamationIcon={<i className="fa fa-exclamation-circle clr--error-element"></i>}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <p>{modalContent.info.incorrectZipcode}</p>
                    </ModalColumn>
                    <ModalColumn
                        header={modalContent.header.isCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modalContent.btn.login}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>{modalContent.info.signInAccount}</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react container max-width--sm`}
                    isOpen={getModal('auto Pay Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modalContent.header.autoPay}
                        columnClassName="col modal-col"
                        btnPrimary={modalContent.btn.submit}
                        btnCloseSecondary={modalContent.btn.cancel}
                        onClose={handleModalClose}
                        isDisabled={!radioSelected}
                    >
                        <>
                            <p>{modalContent.info.paymentSelect}</p>
                            <form>
                                <RadioInputGroup
                                    className="mg-l--0"
                                    radioData={radioPaymentMethod}
                                    onChange={handleRadioChange}
                                />
                            </form>

                            <div className="helper-text">
                                <p className="p-2">{modalContent.info.termsSubmit}</p>
                                <p className="p-2">{modalContent.info.paymentPage}</p>
                            </div>
                        </>
                    </ModalColumn>
                </ModalContainer>
            </div>
        </>
    );
};
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
