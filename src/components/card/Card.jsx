import { StyledCard } from './styles';

const Card = ({
	icon,
	alt,
	username,
	number,
	category,
	amount,
	border,
	positive
}) => {
	return (
		<StyledCard>
			<div>
				<img src={icon} alt={alt} />
				<span>{username}</span>
			</div>
			<div>
				<span>{number}</span>
				<span>{category}</span>
			</div>
			<div>
				{positive ? (
					<img src='/images/icon-up.svg' alt='icon up' />
				) : (
					<img src='/images/icon-down.svg' alt='icon down' />
				)}
				<span>{amount} Today</span>
			</div>
		</StyledCard>
	);
};

export default Card;
