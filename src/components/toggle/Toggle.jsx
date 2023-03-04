import {
	StyledInput,
	StyledLabel,
	ToggleContainer,
	ToggleText
} from './styles';

const Toggle = ({ darkMode, setDarkMode }) => {
	return (
		<ToggleContainer>
			<ToggleText> {darkMode ? 'Light Mode' : 'Dark Mode'}</ToggleText>
			<StyledInput
				type='checkbox'
				id='toggle'
				checked={darkMode}
				onChange={() => setDarkMode(!darkMode)}
			/>
			<StyledLabel htmlFor='toggle' darkMode={darkMode} />
		</ToggleContainer>
	);
};

export default Toggle;
