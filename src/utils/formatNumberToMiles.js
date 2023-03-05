export const formatNumber = number => {
	if (!isNaN(number)) {
		number = number
			.toString()
			.split('')
			.reverse()
			.join('')
			.replace(/(?=\d*\.?)(\d{3})/g, '$1.');
		number = number.split('').reverse().join('').replace(/^[.]/, '');
		return number;
	} else {
		alert('Solo se permiten numeros');
	}
};
