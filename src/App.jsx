import { useState } from 'react';
import MainContainer from './components/main-container/MainContainer';
import { GlobalStyle } from './styles/globalStyles';

const App = () => {
	const [darkMode, setDarkMode] = useState(false);
	return (
		<>
			<GlobalStyle darkMode={darkMode} />
			<MainContainer
				darkMode={darkMode}
				setDarkMode={setDarkMode}
				totalText='Total Followers'
				totalNumber={23.004}
			/>
		</>
	);
};

export default App;
