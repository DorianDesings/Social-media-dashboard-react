import { formatNumber } from '../../utils/formatNumberToMiles';
import CardCounter from '../card-counter/CardCounter';
import CardIcon from '../card-icon/CardIcon';
import { CardCategory, CardHeader, CardNumber, StyledCard } from './styles';

const Card = ({
	icon,
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
				<CardIcon icon={icon} />
				<span>{username}</span>
			</CardHeader>
			<CardNumber darkMode={darkMode}>{formatNumber(number)}</CardNumber>
			<CardCategory darkMode={darkMode}>{category}</CardCategory>

			<CardCounter positive={positive} amount={amount} />
		</StyledCard>
	);
};

export default Card;
