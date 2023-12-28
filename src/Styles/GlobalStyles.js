import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --amarillo: #FFBE0B;
    --naranja: #e67e22;
    --rosa: #FF006E;
    --violeta: #8338EC;
    --azul-claro:#3A86FF;
    --black:#000000;
    --verde: #2ecc71;
    --gris-oscuro: #34495e;
    --azul-principal: #3498db;
    --gris-claro: #ecf0f1;
    /* text-color */
    --text-color-white: #fff


}
html{
scroll-behavior: smooth;
}

body{
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: 'Darker Grotesque', sans-serif;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
    color: black


}
a{
    color: var(--black);
}
h2{
    color: var(--blanco);
    font-size: 1.5rem;
    font-weight: 500;
    @media screen and (max-width: 768px) {
    padding-left: 1.2rem;
    }
    
    
}
`;
