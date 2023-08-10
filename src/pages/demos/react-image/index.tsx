import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Image from '../../../components/ImageComponent/Image';
import { imageDataReq, imageData2, imageData1, imageData3 } from '../../../config/imageData';
import '../../../styles/main.scss';

const App: React.FC = () => {
    return (
        <>
            <section>
                <h1 className="fs--text-center">Image Component with All attributes</h1>
                <div className="row">
                    <div className=" col--md-4 col--lg-4">
                        <Image {...imageData1} />
                    </div>
                    <div className=" col--md-4 col--lg-4">
                        <Image {...imageData2} />
                    </div>
                    <div className=" col--md-4 col--lg-4">
                        <Image {...imageData3} />
                    </div>
                </div>
            </section>
            <section>
                <h1 className="fs--text-center">Image Components with only Required Attributes</h1>
                <Image {...imageDataReq} />
            </section>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
