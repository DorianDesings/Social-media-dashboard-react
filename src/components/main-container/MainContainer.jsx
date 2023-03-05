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
				<Card
					icon={'/images/icon-facebook.svg'}
					alt='Icon Facebook'
					username='@nathanf'
					number={1987}
					category='Followers'
					amount={12}
					border='#178FF5'
					darkMode={darkMode}
					positive
				/>
				<Card
					icon={'/images/icon-twitter.svg'}
					alt='Icon Twitter'
					username='@nathanf'
					number={1044}
					category='Followers'
					amount={99}
					border='#1DA1F2'
					darkMode={darkMode}
					positive
				/>
				<Card
					icon={'/images/icon-instagram.svg'}
					alt='Icon Instagram'
					username='@nathanf'
					number='11K'
					category='Followers'
					amount={1099}
					border='#FDC366'
					darkMode={darkMode}
					positive
				/>
				<Card
					icon={'/images/icon-youtube.svg'}
					alt='Icon Youtube'
					username='@nathanf'
					number={8239}
					category='Subscribers'
					amount={144}
					darkMode={darkMode}
					border='#C4032B'
				/>
			</StyledMain>
		</>
	);
};

export default MainContainer;
