import { createGlobalStyle } from "styled-components";
// -- Modelo --
// import RobotoThin from './Roboto-Thin.woff2';
import ShareTechMono from './ShareTechMono-Regular.woff2';
import SeoulHangang from './SeoulHangang-Medium.woff2'

export default createGlobalStyle`
    /* -- Modelo --
    @font-face {
        font-family: Roboto-Thin;
        src: url() format('woff2');
        font-weight: 100;
        font-style: normal;
    } */
    @font-face {
        font-family: ShareTechMono;
        src: url(${ShareTechMono}) format('woff2');
        font-weight: 100;
        font-style: normal;
    }
    @font-face {
        font-family: SeoulHangang-Medium;
        src: url(${SeoulHangang}) format('woff2');
        font-weight: 200;
        font-style: normal;
    }
`