export function chunkArray<T = unknown>(array: T[], chunkSize: number): T[][] {
	const chunkedArray: T[][] = [];
	let index = 0;

	while (index <= array.length) {
		chunkedArray.push(array.slice(index, index + chunkSize));
		index += chunkSize;
	}

	return chunkedArray;
}

export function removeAtIndex<T = any>(array: Array<T> = [], index = -1) {
	// Check for invalid index
	const isValidIndex = index >= 0 && index < array.length;
	if (!isValidIndex) {
		return array;
	}
	// Return a new array excluding the element at the given index
	return [...array.slice(0, index), ...array.slice(index + 1)];
}
