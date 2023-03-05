import styled from 'styled-components';

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 255px;
	height: 220px;
	padding: 2rem 5.25rem;
	text-align: center;
	background-color: ${({ darkMode }) => (darkMode ? '#20222F' : '#F7F9FF')};
	border-top: 5px solid ${({ border }) => border};
	border-radius: 0.5rem;
	transition: background-color 0.3s;
`;

const CardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 110px;
	color: ${({ darkMode }) => (darkMode ? '#8C98C6' : '#63687D')};
	transition: color 0.3s;
`;

const CardNumber = styled.span`
	color: ${({ darkMode }) => (darkMode ? '#fff' : '#1D1F29')};
	font-size: 3.5rem;
	font-weight: bold;
	transition: color 0.3s;
`;

const CardCategory = styled.span`
	color: #63687d;
	letter-spacing: 2px;
	text-transform: uppercase;
	color: ${({ darkMode }) => (darkMode ? '#8C98C6' : '#63687D')};
	transition: color 0.3s;
`;

const CardCounter = styled.span`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: ${({ positive }) => (positive ? '#1EB589' : '#DC414C')};
	font-size: 0.75rem;
	font-weight: bold;

	& img {
		margin-right: 0.2rem;
	}
`;

export { StyledCard, CardHeader, CardNumber, CardCategory, CardCounter };
