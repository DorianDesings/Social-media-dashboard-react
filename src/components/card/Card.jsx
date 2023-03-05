import {
	CardCategory,
	CardCounter,
	CardHeader,
	CardNumber,
	StyledCard
} from './styles';

const Card = ({
	icon,
	alt,
	username,
	number,
	category,
	amount,
	border,
	darkMode,
	positive
}) => {
	return (
		<StyledCard border={border} darkMode={darkMode}>
			<CardHeader darkMode={darkMode}>
				<img src={icon} alt={alt} />
				<span>{username}</span>
			</CardHeader>
			<CardNumber darkMode={darkMode}>{number}</CardNumber>
			<CardCategory darkMode={darkMode}>{category}</CardCategory>

			<CardCounter positive={positive}>
				{positive ? (
					<img src='/images/icon-up.svg' alt='icon up' />
				) : (
					<img src='/images/icon-down.svg' alt='icon down' />
				)}
				<span>{amount} Today</span>
			</CardCounter>
		</StyledCard>
	);
};

export default Card;
