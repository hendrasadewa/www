// Read a file and return the content as a string
// This is a worker so it can be used in the background
self.onmessage = async (e: MessageEvent) => {
	const file = e.data;
	const payload: WorkerResponse<string | ArrayBuffer | null> = {
		data: null,
		message: 'not implemented',
		success: false
	};

	try {
		const reader = new FileReader();

		reader.onload = () => {
			payload.data = reader.result;
			payload.message = 'File read successfully';
			payload.success = true;
			self.postMessage(payload);
		};

		reader.onerror = () => {
			payload.message = 'Failed to read the file';
			payload.success = false;
			self.postMessage(payload);
		};

		reader.readAsText(file);
	} catch (error: unknown) {
		payload.success = false;
		payload.data = null;
		if (error instanceof Error) {
			payload.message = error.message;
		} else {
			payload.message = 'Unknown error occurred';
		}
		self.postMessage(payload);
	}
};
