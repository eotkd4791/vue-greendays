export default function addZero(number) {
	const numberToString = number.toString();
	return numberToString.length < 2 ? '0' + numberToString : numberToString;
}
