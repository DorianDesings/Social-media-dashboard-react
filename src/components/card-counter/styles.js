import styled from 'styled-components';

const StyledCardCounter = styled.span`
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

export { StyledCardCounter };
