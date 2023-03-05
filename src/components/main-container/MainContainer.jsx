import { ICONS } from '../../constants/icons';
import { mainCards } from '../../constants/main-cards';
import { formatNumber } from '../../utils/formatNumberToMiles';
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
				<h2>Overview - Today</h2>
				<StyledSecondaryCards>
					<SmallCard
						text='Page Views'
						icon={ICONS.facebook}
						number={117}
						amount='3%'
						darkMode={darkMode}
						positive
					/>
					<SmallCard
						text='Likes'
						icon={ICONS.facebook}
						number={52}
						amount='3%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Likes'
						icon={ICONS.instagram}
						number={formatNumber(5462)}
						amount='2257%'
						darkMode={darkMode}
						positive
					/>
					<SmallCard
						text='Profile Views'
						icon={ICONS.instagram}
						number={formatNumber(52000)}
						amount='1375%'
						darkMode={darkMode}
						positive
					/>
					<SmallCard
						text='Retweets'
						icon={ICONS.twitter}
						number={117}
						amount='303%'
						darkMode={darkMode}
						positive
					/>
					<SmallCard
						text='Likes'
						icon={ICONS.twitter}
						number={507}
						amount='553%'
						darkMode={darkMode}
						positive
					/>
					<SmallCard
						text='Likes'
						icon={ICONS.youtube}
						number={107}
						amount='19%'
						darkMode={darkMode}
					/>
					<SmallCard
						text='Total Views'
						icon={ICONS.youtube}
						number={1407}
						amount='12%'
						darkMode={darkMode}
					/>
				</StyledSecondaryCards>
			</StyledMain>
		</>
	);
};

export default MainContainer;
