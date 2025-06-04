export function downloadFile(
	content: string,
	filename: string,
	mimetype: string
) {
	const blob = new Blob([content], { type: mimetype });
	const url = URL.createObjectURL(blob);

	const a = document.createElement('a');
	a.href = url;
	a.download = filename;
	a.click();

	// Clean up
	URL.revokeObjectURL(url);
}
