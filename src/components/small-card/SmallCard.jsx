import CardCounter from '../card-counter/CardCounter';
import CardIcon from '../card-icon/CardIcon';
import { SmallCardHeader, StyledSmallCard } from './styles';

const SmallCard = ({ text, icon, number, amount, positive, darkMode }) => {
	return (
		<StyledSmallCard darkMode={darkMode}>
			<SmallCardHeader>
				<span>{text}</span>
				<CardIcon icon={icon} />
			</SmallCardHeader>
			<SmallCardHeader>
				<span>{number}</span>
				<CardCounter amount={amount} positive={positive} />
			</SmallCardHeader>
		</StyledSmallCard>
	);
};

export default SmallCard;
