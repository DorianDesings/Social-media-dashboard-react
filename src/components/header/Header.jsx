import { StyledHeader } from './styles';

const Header = ({ darkMode, children }) => {
	return <StyledHeader darkMode={darkMode}>{children}</StyledHeader>;
};

export default Header;
