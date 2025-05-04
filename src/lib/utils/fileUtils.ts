import type { WorkerResponse } from '$lib/types/common';

export async function loadFile<T = string | ArrayBuffer | null>(file: File) {
	return new Promise<T>((resolve, reject) => {
		// spawn a new worker
		const worker = new Worker(
			new URL('../workers/fileReader.worker.ts', import.meta.url),
			{
				type: 'module'
			}
		);

		// handle the message from the worker
		worker.onmessage = (e: MessageEvent<WorkerResponse<T>>) => {
			if (e.data.success) {
				resolve(e.data.data);
			} else {
				reject(new Error(e.data.message));
			}
			worker.terminate();
		};

		// handle the error from the worker
		worker.onerror = (error) => {
			reject(error);
			worker.terminate();
		};

		// send file into the web worker
		worker.postMessage(file);
	});
}

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
