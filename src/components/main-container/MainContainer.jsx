import { mainCards } from '../../constants/main-cards';
import { formatNumber } from '../../utils/formatNumberToMiles';
import Card from '../card/Card';
import Header from '../header/Header';
import { HeaderContent, HeaderSubtitle, HeaderTitle } from '../header/styles';
import Toggle from '../toggle/Toggle';
import { StyledMain, StyledMainCards } from './styles';

const MainContainer = ({ darkMode, setDarkMode, totalText, totalNumber }) => {
	return (
		<>
			<Header darkMode={darkMode}>
				<HeaderContent darkMode={darkMode}>
					<div>
						<HeaderTitle darkMode={darkMode}>
							Social Media Dashboard
						</HeaderTitle>
						<HeaderSubtitle darkMode={darkMode}>
							{totalText} {formatNumber(totalNumber)}
						</HeaderSubtitle>
					</div>
					<Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
				</HeaderContent>
			</Header>
			<StyledMain>
				<StyledMainCards>
					{mainCards.map(card => (
						<Card key={card.id} {...card} darkMode={darkMode} />
					))}
				</StyledMainCards>
			</StyledMain>
		</>
	);
};

export default MainContainer;
