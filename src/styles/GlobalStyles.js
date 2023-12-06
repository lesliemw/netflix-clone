import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    &{--color-light-red: #e50914;
    --color-dark-red:#B81D24;
    --color-light-black:#221F1F;
    --color-white:#F5F5F1;
    --color-pure-white:#FFFFFF;
    --color-focus-white: #FEFEFE;
    --color-dark-white:#d1d1cf;
    --color-dark-white-opacity:rgba(209, 209, 207, 0.6);
    --color-dark-white-moreOpacity:rgba(209, 209, 207, 0.3);
    }
}

:root::-webkit-scrollbar {
    display: none;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  /* Creating animations for dark mode */
  transition: background-color 0.3s, border 0.3s;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Bebas Neue', sans-serif;
  font-family: 'Montserrat', sans-serif;
  color: var(--color-light-red);
  background-color: var(--color-light-black);
  transition: color 0.3s, background-color 0.3s;
  min-height: 100dvh;
  line-height: 1.5;
  font-size: 1.6rem;
  
}

input,
button,
textarea,
select {
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}



a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

img {
  max-width: 100%;
}

`;

export default GlobalStyles;
