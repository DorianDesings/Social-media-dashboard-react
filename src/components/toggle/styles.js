import styled from 'styled-components';

const ToggleContainer = styled.div`
	position: relative;
	top: 45px;
	display: flex;
	align-items: center;
`;

const ToggleText = styled.span`
	margin-right: 1rem;
	color: ${({ darkMode }) => (darkMode ? '#8C98C6' : '#848BAB')};
`;

const StyledLabel = styled.label`
	position: relative;
	display: flex;
	align-items: center;
	width: 50px;
	height: 25px;
	border-radius: 1rem;
	padding: 0.25rem;
	background: ${({ darkMode }) =>
		darkMode ? '#AEB3CB' : 'linear-gradient(#40DB82,#388FE7)'};
	cursor: pointer;

	&::after,
	&::before {
		content: '';
		position: absolute;
	}

	&::after {
		width: 1rem;
		height: 1rem;
		border-radius: 50%;
		background-color: ${({ darkMode }) => (darkMode ? '#252B42' : '#F1F3FA')};
		transform: translateX(0);
		transition: transform 0.3s linear, background-color 0.3s linear;
	}
`;

const StyledInput = styled.input`
	display: none;
	&:checked + ${StyledLabel}::after {
		transform: translateX(calc(43px - 100%));
	}
`;

export { ToggleContainer, StyledLabel, StyledInput, ToggleText };
