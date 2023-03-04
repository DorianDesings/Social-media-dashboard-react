import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,*::after,*::before{
	box-sizing: border-box;
}
body {
	margin: 0;
	background-color: ${({ darkMode }) => (darkMode ? '#1D1F29' : '#FFF')};;
	user-select: none;
	font-family: 'Inter', sans-serif;
	transition: background-color 0.3s linear;
}
`;

export { GlobalStyle };
