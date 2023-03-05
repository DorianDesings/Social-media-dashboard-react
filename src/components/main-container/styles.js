import styled from 'styled-components';

const StyledMain = styled.main`
	position: relative;
	top: -75px;
	max-width: 1110px;
	margin-left: auto;
	margin-right: auto;
`;

const StyledMainCards = styled.div`
	display: flex;
	justify-content: space-between;
`;

const StyledSecondaryCards = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
`;

export { StyledMain, StyledMainCards, StyledSecondaryCards };
