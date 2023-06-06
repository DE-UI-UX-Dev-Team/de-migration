import type { Preview } from "@storybook/react";
import "../public/assets/styles/main.css";
//import { library } from '@fortawesome/fontawesome-pro';
//import {fa-pen-solid}   from '../../../assets/fonts/fontawesome-kit-4aceee39de/scss/custom-icons.scss';



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
