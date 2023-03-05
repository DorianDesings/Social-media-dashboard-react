import { v4 } from 'uuid';
import { ICONS } from './icons';
export const mainCards = [
	{
		id: v4(),
		icon: ICONS.facebook,
		username: '@nathanf',
		number: 1987,
		category: 'Followers',
		amount: '12 Today',
		border: '#178FF5',
		positive: true
	},
	{
		id: v4(),
		icon: ICONS.twitter,
		username: '@nathanf',
		number: 1044,
		category: 'Followers',
		amount: '99 Today',
		border: '#1DA1F2',
		positive: true
	},
	{
		id: v4(),
		icon: ICONS.instagram,
		username: '@nathanf',
		number: '11K',
		category: 'Followers',
		amount: '1099 Today',
		border: '#FDC366',
		positive: true
	},
	{
		id: v4(),
		icon: ICONS.youtube,
		username: '@nathanf',
		number: '8239',
		category: 'Subscribers',
		amount: '144 Today',
		border: '#C4032B',
		positive: false
	}
];
