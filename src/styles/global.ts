'use client';

import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
  --white: #fff;
  --grey: #f4f4f4;
  --green: #33b53d;
  --border-color: #bdc1c9;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: var(--font-roboto);
  scroll-behavior: smooth !important;
}

body {
  background: var(--white);
  line-height: 1;
  font-size: 100%;
}

input,
textarea {
  width: 100%;
  min-height: 3rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;
  line-height: 2;
  line-height: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: 0.5rem;
  outline-color: var(--border-color);
}

ol,
ul {
  list-style: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

img {
  display: block;
  width: 100%;
  height: auto;
}

a {
  color: black;
  text-decoration: none;
  transition: color 0.2s;
  :hover {
    color: var(--green);
  }
}

a:hover {
  color: var(--green);
}

`;

export default GlobalStyles;
