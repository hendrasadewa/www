const globalState = $state({
	isMobile: true
});

export const globalStore = {
	get isMobile() {
		return globalState.isMobile;
	},
	setWidthChange(innerWidth: number) {
		globalState.isMobile = innerWidth <= 728;
	}
};
