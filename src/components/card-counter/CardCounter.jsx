import { StyledCardCounter } from './styles';

const CardCounter = ({ positive, amount }) => {
	return (
		<StyledCardCounter positive={positive}>
			{positive ? (
				<img src='/images/icon-up.svg' alt='icon up' />
			) : (
				<img src='/images/icon-down.svg' alt='icon down' />
			)}
			<span>{amount} Today</span>
		</StyledCardCounter>
	);
};

export default CardCounter;
