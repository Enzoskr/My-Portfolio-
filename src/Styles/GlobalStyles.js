import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --amarillo: #FFBE0B;
    --naranja: #e67e22;
    --rosa: #FF006E;
    --violeta: #8338EC;
    --azul-claro: #3A86FF;
    --black: #000000;
    --verde: #2ecc71;
    --gris-oscuro: #34495e;
    --azul-principal: #3498db;
    --gris-claro: #ecf0f1;
    --text-color-white: #fff;
    --blanco: #ffffff; /* Variable blanco corregida */
}

html {
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    background-color: white;
    font-family: 'Darker Grotesque', sans-serif;
    color: black;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden;
}

a {
    color: var(--black);
    text-decoration: none; /* Quitar subrayado de enlaces */
}

h2 {
    
    font-weight: 500;
    padding-left: 1.2rem; 
    margin: 0;
    display: flex;
    padding-top: 20px;
    
    
    


    

}
`;
