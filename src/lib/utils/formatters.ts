/**
 * Utility formatters for numbers, dates, file names, and file sizes.
 * All formatters use Indonesian ('id-ID') locale.
 */

const ID_LOCALE = 'id-ID';
const MAX_FILENAME_LENGTH = 40;
const FILENAME_TRUNCATE_LENGTH = 25;

/**
 * Formats a number according to Indonesian locale.
 */
export const numberFormatter = new Intl.NumberFormat(ID_LOCALE);

/**
 * Formats a Date object into a human-readable string in Indonesian locale.
 */
export function formatDisplayDate(date: Date): string {
	return date.toLocaleDateString(ID_LOCALE, {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

/**
 * Truncates and formats a file name if it exceeds the maximum length.
 */
export function formatDisplayFileName(fileName: string): string {
	return fileName.length > MAX_FILENAME_LENGTH
		? `${fileName.substring(0, FILENAME_TRUNCATE_LENGTH)}...`
		: fileName;
}

/**
 * Formats a file size in bytes into a human-readable string with appropriate units (KB, MB, GB).
 * Examples: 1,234 KB, 2.5 MB, 1.1 GB
 */
export function formatDisplayFileSize(sizeInBytes: number): string {
	if (sizeInBytes < 1_000_000) {
		// Less than 1 MB, show as KB
		const kb = sizeInBytes / 1_000;
		return `${numberFormatter.format(Math.round(kb))} KB`;
	} else if (sizeInBytes < 1_000_000_000) {
		// Less than 1 GB, show as MB (1 decimal)
		const mb = sizeInBytes / 1_000_000;
		return `${numberFormatter.format(Number(mb.toFixed(1)))} MB`;
	} else {
		// 1 GB or more, show as GB (2 decimals)
		const gb = sizeInBytes / 1_000_000_000;
		return `${numberFormatter.format(Number(gb.toFixed(2)))} GB`;
	}
}

// Optionally, group all formatters in a single object for easier imports
export const Formatter = {
	number: numberFormatter,
	date: formatDisplayDate,
	fileName: formatDisplayFileName,
	fileSize: formatDisplayFileSize
};
