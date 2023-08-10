import { ImageProps } from '../interfaces/Props';

export const imageData1: ImageProps = {
    src: 'https://d38suhqqynrvtl.cloudfront.net/images/billimages/431210539-states-with-flags-texas-c-300x300.png',
    alt: 'texas flag',
    width: 'auto',
    height: 'auto',
    className: 'custom-image',
    onClick: () => {
        alert('Texas Image clicked!');
    },
    align: 'center', // Example align prop
    border: 'dotted', // Example border prop
    borderRadius: '25',
};
export const imageData2: ImageProps = {
    src: 'https://d38suhqqynrvtl.cloudfront.net/images/billimages/431210500-states-with-flags-illinois-c-300x300.png',
    alt: 'illinois flag',
    width: 'auto',
    height: 'auto',
    className: 'custom-image',
    onClick: () => {
        alert('Illinois Image clicked!');
    },
    align: 'center', // Example align prop
    border: 'dashed', // Example border prop
    borderRadius: 'rounded',
};

export const imageData3: ImageProps = {
    src: 'https://d38suhqqynrvtl.cloudfront.net/images/billimages/431443133-states-with-flags-new-york-c-300x300.png',
    alt: 'ny flag',
    width: '300px',
    height: '300px',
    className: 'custom-image',
    onClick: () => {
        alert('NY Image clicked!');
    },
    align: 'center', // Example align prop
    border: 'double', // Example border prop
    borderRadius: '100',
};

export const imageDataReq: ImageProps = {
    src: 'https://d38suhqqynrvtl.cloudfront.net/images/billimages/431210539-states-with-flags-texas-c-300x300.png',
    alt: 'Image',
};
