import styled from 'styled-components';

const StyledHeader = styled.header`
	height: 250px;
	background-color: ${({ darkMode }) => (darkMode ? '#20222F' : '#F7F9FF')};
	transition: background-color 0.3s linear;
`;

const HeaderContent = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1110px;
	margin-left: auto;
	margin-right: auto;
	background-color: ${({ darkMode }) => (darkMode ? '#20222F' : '#F7F9FF')};
	transition: background-color 0.3s linear;
`;

const HeaderTitle = styled.h1`
	margin: 2.25rem 0 0.5rem;
	color: ${({ darkMode }) => (darkMode ? '#fff' : '#1D1F29')};
	transition: color 0.3s linear;
`;

const HeaderSubtitle = styled.h2`
	margin: 0;
	color: ${({ darkMode }) => (darkMode ? '#8C98C6' : '#63687D')};
	transition: color 0.3s linear;
`;

export { StyledHeader, HeaderContent, HeaderTitle, HeaderSubtitle };
