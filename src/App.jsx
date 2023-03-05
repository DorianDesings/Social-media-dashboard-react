import { useState } from 'react';
import MainContainer from './components/main-container/MainContainer';
import { mainCards } from './constants/main-cards';
import { GlobalStyle } from './styles/globalStyles';

const totalNumber = mainCards.reduce((acc, current) => current.number + acc, 0);

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<GlobalStyle darkMode={darkMode} />
			<MainContainer
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				totalText='Total Followers'
				totalNumber={totalNumber}
			/>
		</>
	);
};

export default App;
