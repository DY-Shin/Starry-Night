import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    //전체 색상 기본값 설정
    :root {
        /* --primary-light: #8abdff;
        --primary: #6d5dfc;
        --primary-dark: #5b0eeb;
        
        --white: #FFFFFF;
        --greyLight-1: #E4EBF5;
        --greyLight-2: #c8d0e7;
        --greyLight-3: #bec8e4;
        --greyDark: #9baacf; */
        --textColor: #4b4754;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        transition: 0.2s;

        //글자 기본값
        font-size: 1rem;
        font-family: 'SBAggroL';
        color: var(--textColor);
    }
`;
