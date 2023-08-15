import '../../../styles/main.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../../components/Footer/Footer';
import { footerData } from '../../../config/footerData';
import SampleComponent from '../../../components/SampleComponent';
import buttonData from '../../../config/buttonData';
import inputButtonData from '../../../config/inputButtonData';
import ButtonItem from '../../../components/Buttons/ButtonItem';
import InputButtonItem from '../../../components/Buttons/InputButtonItem';

const App: React.FC = () => {
    return (
        <Footer
            footerSectionClass={footerData.footerSectionClass}
            disclaimer={footerData.disclaimer}
            linkListArray={footerData.linkListArray}
        ></Footer>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
