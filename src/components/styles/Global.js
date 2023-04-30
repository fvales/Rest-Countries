import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    /* https://piccalil.li/blog/a-modern-css-reset */

    /* Box sizing rules */
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    /* Remove default margin */
    * {
        margin: 0;
        padding: 0;
        font: inherit;
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
        list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
        scroll-behavior: smooth;
    }

    html,
    body, #root {
        height: 100%;
    }

    /* Set core body defaults */
    body {
        font-size: 1rem;
        font-family: ${({theme}) => theme.font.body}, sans-serif;
        background-color: ${({theme}) => theme.colors.bg_color};
        color: ${({theme}) => theme.colors.text};
        text-rendering: optimizeSpeed;
        line-height: 1.25;
    }

    /* A elements that don't have a class get default styles */
    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        font-weight: 400;
    }

    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        white-space: nowrap;
        overflow: hidden;
        border: 0;
        margin: -1px;
    }
`

export default GlobalStyle;