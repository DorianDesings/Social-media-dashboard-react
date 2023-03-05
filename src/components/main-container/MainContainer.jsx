import { v4 } from 'uuid';
import { ICONS } from '../../constants/icons';
import { mainCards } from '../../constants/main-cards';
import Card from '../card/Card';
import Header from '../header/Header';
import { HeaderContent, HeaderSubtitle, HeaderTitle } from '../header/styles';
import SmallCard from '../small-card/SmallCard';
import Toggle from '../toggle/Toggle';
import { StyledMain, StyledMainCards, StyledSecondaryCards } from './styles';

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
				<StyledMainCards>
					{mainCards.map(card => (
						<Card key={v4()} {...card} darkMode={darkMode} />
					))}

					<Card
						icon={ICONS.facebook}
						username='@nathanf'
						number={1987}
						category='Followers'
						amount='12 Today'
						border='#178FF5'
						darkMode={darkMode}
						positive
					/>
				</StyledMainCards>
				<h2>Overview - Today</h2>
				<StyledSecondaryCards>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
					/>
				</StyledSecondaryCards>
			</StyledMain>
		</>
	);
};

export default MainContainer;
