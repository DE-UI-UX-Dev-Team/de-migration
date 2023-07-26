import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RadioInputGroup from '../../../components/Forms/RadioInput';
import { initialModals, moalTextInput, radioPaymentMethod, radioServiceLocation } from '../../../config/modalsData';
import { ModalColumn, ModalContainer } from '../../../components/Modals/Modal';
import TextInput from '../../../components/Forms/TextInput';
import * as modal from '../../../local/en/modals/constants';

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
                        header={modal.headerConfirm}
                        columnClassName="col modal-col"
                        btnPrimary={modal.btnConfirm}
                        btnCloseSecondary={modal.btnCancel}
                        onClose={handleModalClose}
                    >
                        <p>Make [Card Name] the new default payment method?</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react`}
                    isOpen={getModal('payment Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modal.headerConfirm}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modal.btnContinue}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <>
                            <h5>You have chosen: Live Brighter 27</h5>
                            <p>Please provide your complete service address.</p>
                        </>
                    </ModalColumn>
                    <ModalColumn
                        header={modal.headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modal.btnContinue}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam
                            erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                        </p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react`}
                    isOpen={getModal('form Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modal.headerNewCustomer}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modal.btnContinue}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <form>
                            <div className="row">
                                <div className="col">
                                    <h5>You have chosen: Live Brighter 27</h5>
                                    <p>Please provide your complete service address.</p>
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
                        header={modal.headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modal.btnContinue}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam
                            erat volutpat. Donec placerat nisl magna, et faucibus arcu condimentum sed.
                        </p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react container max-width--sm`}
                    isOpen={getModal('location Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modal.headerSelectLocation}
                        columnClassName="col modal-col"
                        btnPrimary={modal.btnProceed}
                        btnCloseSecondary={modal.btnCancel}
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
                        header={modal.headerNoService}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={modal.btnZipcode}
                        btnCloseSecondary={modal.btnBack}
                        withExclamationIcon={<i className="fa fa-exclamation-circle clr--error-element"></i>}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <p>We're sorry, the zip code you entered is not serviced by Direct Energy at this time.</p>
                    </ModalColumn>
                    <ModalColumn
                        header={modal.headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={modal.btnLogin}
                        iconClassName="close-icon-right"
                        onClose={handleModalClose}
                    >
                        <p>
                            If you have an account with us, please sign in to your account to get accurate pricing and
                            availability.
                        </p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName={`modal-container-react container max-width--sm`}
                    isOpen={getModal('auto Pay Modal')?.isActive}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={modal.headerAutoPay}
                        columnClassName="col modal-col"
                        btnPrimary={modal.btnSubmit}
                        btnCloseSecondary={modal.btnCancel}
                        onClose={handleModalClose}
                        isDisabled={!radioSelected}
                    >
                        <>
                            <p>Select Payment Method</p>
                            <form>
                                <RadioInputGroup
                                    className="mg-l--0"
                                    radioData={radioPaymentMethod}
                                    onChange={handleRadioChange}
                                />
                            </form>

                            <div className="helper-text">
                                <p className="p-2">By clicking submit, you agree with our Terms and Conditions.</p>
                                <p className="p-2">To add or delete a payment method, visit the Payment Method page.</p>
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
