import type { Preview } from "@storybook/react";
import "../public/assets/styles/main.css";

/*--- Webfont - Roboto Family ---*/

import '../public/assets/webfonts/roboto-bold-webfont.woff';
import '../public/assets/webfonts/roboto-bolditalic-webfont.woff';
import '../public/assets/webfonts/roboto-italic-webfont.woff';
import '../public/assets/webfonts/roboto-light-webfont.woff';
import '../public/assets/webfonts/roboto-lightitalic-webfont.woff';
import '../public/assets/webfonts/roboto-medium-webfont.woff';
import '../public/assets/webfonts/roboto-mediumitalic-webfont.woff';
import '../public/assets/webfonts/roboto-regular-webfont.woff';

import '../public/assets/webfonts/roboto-bold-webfont.woff2';
import '../public/assets/webfonts/roboto-bolditalic-webfont.woff2';
import '../public/assets/webfonts/roboto-italic-webfont.woff2';
import '../public/assets/webfonts/roboto-light-webfont.woff2';
import '../public/assets/webfonts/roboto-lightitalic-webfont.woff2';
import '../public/assets/webfonts/roboto-medium-webfont.woff2';
import '../public/assets/webfonts/roboto-mediumitalic-webfont.woff2';
import '../public/assets/webfonts/roboto-regular-webfont.woff2';

/*--- Webfont - Fontawesome ---*/

import '../public/assets/webfonts/custom-icons.woff2';
import '../public/assets/webfonts/custom-icons.ttf';
import '../public/assets/styles/custom-icons.css';
import '../public/assets/styles/fontawesome.css';
import '../public/assets/styles/brands.css';
import '../public/assets/styles/regular.css';
import '../public/assets/styles/light.css';
import '../public/assets/styles/brands.css';
import '../public/assets/styles/fontawesome.css';
import '../public/assets/webfonts/fa-regular-400.woff2';
import '../public/assets/webfonts/fa-brands-400.woff2';
import '../public/assets/webfonts/fa-solid-900.woff2';
import '../public/assets/webfonts/fa-light-300.woff2';
import '../public/assets/webfonts/fa-regular-400.ttf';
import '../public/assets/webfonts/fa-brands-400.ttf';
import '../public/assets/webfonts/fa-solid-900.ttf';
import '../public/assets/webfonts/fa-light-300.ttf';

/*--- Images ---*/

import '../public/assets/images/de_main_curve.svg';
import '../public/assets/images/de_main_curve_blue.svg';
import '../public/assets/images/de_main_curve_orange.svg';
import '../public/assets/images/de_animated_curve_orange.svg';
import '../public/assets/images/de_animated_curve_blue.svg';
import '../public/assets/images/alexa-button.png';
import '../public/assets/images/appstore-button.png';
import '../public/assets/images/playstore-button.png';
import '../public/assets/images/card-img.jpg';
import '../public/assets/images/card-placeholder-img.png';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
