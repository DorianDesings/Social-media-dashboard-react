import styled from 'styled-components';

const StyledSmallCard = styled.div`
	width: 100%;
	height: 125px;
	padding: 2rem;
	background-color: ${({ darkMode }) => (darkMode ? '#20222F' : '#F7F9FF')};
	border-radius: 0.5rem;
	transition: background-color 0.3s;
`;

const SmallCardHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 1.5rem;
`;

export { StyledSmallCard, SmallCardHeader };
