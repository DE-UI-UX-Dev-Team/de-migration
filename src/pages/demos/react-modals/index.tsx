import '../../../styles/main.scss';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import RadioInputGroup from '../../../components/Forms/RadioInput';
import { moalTextInput, radioPaymentMethod, radioServiceLocation } from '../../../config/modalsData';
import { ModalColumn, ModalContainer } from '../../../components/Modals/Modal';
import TextInput from '../../../components/Forms/TextInput';

const App: React.FC = () => {
    const [activeModal, setActiveModal] = useState<number | null>(null);
    const [radioSelected, setRadioSelected] = useState<boolean>(false);
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 768 });

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
                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(0)}>Basic Modal</button>
                                </div>
                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(1)}>Payment Modal</button>
                                </div>

                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(2)}>Form Modal</button>
                                </div>

                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(3)}>Location Modal</button>
                                </div>

                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(4)}>No Service Modal</button>
                                </div>

                                <div className="col--md-4 col--lg-4">
                                    <button onClick={() => handleModalOpen(5)}>Auto Pay Modal</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal-box">
                <ModalContainer
                    containerClassName="modal-container-react container max-width--sm"
                    isOpen={activeModal === 0}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header="Confirm Default Payment"
                        columnClassName="col modal-col"
                        btnprimary="Confirm"
                        btnsecondary="Cancel"
                        withCloseIcon={true}
                        onClose={handleModalClose}
                    >
                        <p>Make [Card Name] the new default payment method?</p>
                    </ModalColumn>
                </ModalContainer>

                <ModalContainer
                    containerClassName="modal-container-react"
                    isOpen={activeModal === 1}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header="Confirm Default Payment"
                        columnClassName="col--md-4 modal-col"
                        btnprimary="Continue"
                        withCloseIcon={!isDesktopOrLaptop}
                        onClose={handleModalClose}
                    >
                        <>
                            <h5>You have chosen: Live Brighter 27</h5>
                            <p>Please provide your complete service address.</p>
                        </>
                    </ModalColumn>
                    <ModalColumn
                        header="Already a Customer?"
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnsecondary="Continue"
                        withCloseIcon={isDesktopOrLaptop}
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
                    isOpen={activeModal === 2}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header="I'm a New Customer"
                        columnClassName="col--md-4 modal-col"
                        btnprimary="Continue"
                        withCloseIcon={!isDesktopOrLaptop}
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
                        header="Already a Customer?"
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnsecondary="Continue"
                        withCloseIcon={isDesktopOrLaptop}
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
                    isOpen={activeModal === 3}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header=" Please Select a Service
                        Location"
                        columnClassName="col modal-col"
                        btnprimary="Proceed"
                        btnsecondary="Cancel"
                        withCloseIcon={true}
                        onClose={handleModalClose}
                        withexclamationIcon={true}
                        isdisabled={!radioSelected}
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
                    isOpen={activeModal === 4}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header=" No Service Available"
                        columnClassName="col--md-4 modal-col"
                        btnprimary="RE-ENTER ZIP CODE"
                        btnsecondary="Go Back"
                        withexclamationIcon={true}
                        withCloseIcon={!isDesktopOrLaptop}
                        onClose={handleModalClose}
                    >
                        <p>We're sorry, the zip code you entered is not serviced by Direct Energy at this time.</p>
                    </ModalColumn>
                    <ModalColumn
                        header="Already a Customer?"
                        columnClassName="col--md-4 modal-col bg--tertiary-light-1"
                        btnsecondary="Login"
                        withCloseIcon={isDesktopOrLaptop}
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
                    isOpen={activeModal === 5}
                    onClose={handleModalClose}
                >
                    <ModalColumn
                        header="Add Auto Pay"
                        columnClassName="col modal-col"
                        btnprimary="Submit"
                        btnsecondary="Cancel"
                        withCloseIcon={true}
                        onClose={handleModalClose}
                        isdisabled={!radioSelected}
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
