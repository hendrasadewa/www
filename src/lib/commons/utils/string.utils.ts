export function getRandomChar() {
	const chars = 'abcdefghijklmnopqrstuvwxyz';
	return chars[Math.floor(Math.random() * chars.length)];
}
