import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    :root{
        --background: #F0F2F5;
        --blue: #5429CC;
        --green: #33CC95;
        --red: #E62E4D;
        --title: #363F5F;
        --white: #F0F2F5;
        --text: #969CB3;
        --light-blue: #6933ff;
        --input-background: #E7E9EE;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    button{
        cursor: pointer;
    }

    [disabled]{
        cursor: not-allowed;
        opacity: 0.6;
    }

    body, input, text-area, button{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    .reactModal{
        width: 36rem;
        height: 36.8rem;
        background: var(--white);
        padding: 4rem 3rem;
        border-radius: 0.25rem;
    }

    .modalOverlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top:0;
        right:0;
        left:0;
        bottom: 0;

        display: flex;
        align-items: center;
        justify-content: center;
    }

`