import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import RadioInputGroup from '../../../components/Forms/RadioInput';
import { moalTextInput, modalNames, radioPaymentMethod, radioServiceLocation } from '../../../config/modalsData';
import { ModalColumn, ModalContainer } from '../../../components/Modals/Modal';
import TextInput from '../../../components/Forms/TextInput';

const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<number | null>(null);
    const [radioSelected, setRadioSelected] = useState<boolean>(false);

    const handleModalOpen = (index: number) => {
        setActiveModal(index);
    };

    const handleModalClose = () => {
        setActiveModal(null);
        setRadioSelected(false);
    };

    const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadioSelected(e.target.value !== '');
    };

    const basicModal = activeModal === 0;
    const paymentModal = activeModal === 1;
    const formModal = activeModal === 2;
    const locationModal = activeModal === 3;
    const noServiceModal = activeModal === 4;
    const autoPayModal = activeModal === 5;
    const withExclamationIcon = true;
    const headerConfirm = 'Confirm Default Payment';
    const headerIsCustomer = 'Already a Customer?';
    const headerNewCustomer = "I'm a New Customer";
    const headerSelectLocation = 'Please Select a Service Location';
    const headerNoService = 'No Service Available';
    const headerAutoPay = 'Add Auto Pay';
    const btnConfirm = 'Confirm';
    const btnCancel = 'Cancel';
    const btnContinue = 'Continue';
    const btnProceed = 'Proceed';
    const btnLogin = 'Login';
    const btnSubmit = 'Submit';
    const btnZipcode = 'RE-ENTER ZIP CODE';
    const btnBack = 'Go Back';

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
                                {modalNames.map((name, index) => (
                                    <div
                                        key={index}
                                        className="col--md-4 col--lg-4"
                                    >
                                        <button onClick={() => handleModalOpen(index)}>{name}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal-box">
                <ModalContainer
                    containerClassName="modal-container-react container max-width--sm"
                    isOpen={basicModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerConfirm}
                        columnClassName="col modal-col"
                        btnPrimary={btnConfirm}
                        btnSecondary={btnCancel}
                        onClose={handleModalClose}
                    >
                        <p>Make [Card Name] the new default payment method?</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName="modal-container-react"
                    isOpen={paymentModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerConfirm}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={btnContinue}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <>
                            <h5>You have chosen: Live Brighter 27</h5>
                            <p>Please provide your complete service address.</p>
                        </>
                    </ModalColumn>
                    <ModalColumn
                        header={headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={btnContinue}
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
                    containerClassName="modal-container-react"
                    isOpen={formModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerNewCustomer}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={btnContinue}
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
                        header={headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={btnContinue}
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
                    containerClassName="modal-container-react container max-width--sm"
                    isOpen={locationModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerSelectLocation}
                        columnClassName="col modal-col"
                        btnPrimary={btnProceed}
                        btnSecondary={btnCancel}
                        onClose={handleModalClose}
                        withExclamationIcon={withExclamationIcon}
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
                    containerClassName="modal-container-react"
                    isOpen={noServiceModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerNoService}
                        columnClassName="col--md-4 modal-col"
                        btnPrimary={btnZipcode}
                        btnSecondary={btnBack}
                        withExclamationIcon={withExclamationIcon}
                        iconClassName="close-icon-left"
                        onClose={handleModalClose}
                    >
                        <p>We're sorry, the zip code you entered is not serviced by Direct Energy at this time.</p>
                    </ModalColumn>
                    <ModalColumn
                        header={headerIsCustomer}
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnSecondary={btnLogin}
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
                    containerClassName="modal-container-react container max-width--sm"
                    isOpen={autoPayModal}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header={headerAutoPay}
                        columnClassName="col modal-col"
                        btnPrimary={btnSubmit}
                        btnSecondary={btnCancel}
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
