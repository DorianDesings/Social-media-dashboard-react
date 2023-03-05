import { v4 } from 'uuid';
import { ICONS } from '../../constants/icons';
import { mainCards } from '../../constants/main-cards';
import Card from '../card/Card';
import Header from '../header/Header';
import { HeaderContent, HeaderSubtitle, HeaderTitle } from '../header/styles';
import Toggle from '../toggle/Toggle';
import { StyledMain } from './styles';

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
							{totalText} {totalNumber}
						</HeaderSubtitle>
					</div>
					<Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
				</HeaderContent>
			</Header>
			<StyledMain>
				{mainCards.map(card => (
					<Card key={v4()} {...card} darkMode={darkMode} />
				))}

				<Card
					icon={ICONS.facebook.src}
					alt={ICONS.facebook.alt}
					username='@nathanf'
					number={1987}
					category='Followers'
					amount={12}
					border='#178FF5'
					darkMode={darkMode}
					positive
				/>
			</StyledMain>
		</>
	);
};

export default MainContainer;
