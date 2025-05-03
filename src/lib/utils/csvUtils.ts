import { loadFile } from './fileUtils';

export async function loadCSVFile(file: File) {
	const text = await loadFile<string>(file);

	return text.split('\n').map((line) => line.split(','));
}

export function copyToClipboard(text: string) {
	if (!navigator) {
		return;
	}

	navigator.clipboard.writeText(text);
}

export function downloadTextFile(blob: Blob, fileName: string) {
	if (!document) {
		return;
	}

	const element = document.createElement('a');

	element.href = URL.createObjectURL(blob);
	element.download = `${fileName}.txt`;
	document.body.appendChild(element);
	element.click();
}

export function copyOrDownloadFile(
	text: string,
	maxLengthToDownload: number = 10_000,
	filename = 'tukang-csv-download'
) {
	if (text.length <= maxLengthToDownload) {
		copyToClipboard(text);
		return;
	}
	const blob = new Blob([text], { type: 'text/plain' });
	downloadTextFile(blob, filename);
}
