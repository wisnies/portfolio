import { createGlobalStyle } from 'styled-components';
import { device } from './devices';

export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        -webkit-tap-highlight-color: rgba(0,0,0,0);
        font-size: 14px;
        letter-spacing: 1px;
        
    }
    ol, ul {
        list-style: none;
    }
    a {
        color: inherit;
        text-decoration: none;
    }
    button {
        border:none;
        background: none;
        outline: none;
        cursor: pointer;
    }
    body {
        -webkit-font-smothing: antialiased;
        -moz-osx-font-smothing: grayscale;
        background-color: #F6D8AE;
        ::-webkit-scrollbar {
        }
        ::-webkit-scrollbar-track {
        }
        ::-webkit-scrollbar-thumb {
        }
        font-size: 14px;
        letter-spacing: 1px;
        @media ${device.mobileL}{
            font-size: 16px;
        }
        @media ${device.laptop}{
            font-size: 18px;
        }
    }
    #root {
        max-width: 100vw;
        min-height: 100vh;
        overflow: hidden;
    }
`;
