export const widthBreakpoints = {
	sm: 640,
	md: 768,
	lg: 1024,
	xl: 1280
};

export function getBreakpointLabel(
	currentWidth: number
): keyof typeof widthBreakpoints {
	const labels = Object.keys(
		widthBreakpoints
	) as (keyof typeof widthBreakpoints)[];
	let result: keyof typeof widthBreakpoints = labels[0];
	for (const label of labels) {
		if (currentWidth >= widthBreakpoints[label]) {
			result = label;
		} else {
			break;
		}
	}
	return result;
}
