import type { NotificationSchema } from '../entity/common.entity';

interface State {
	isMobile: boolean;
	notifications: NotificationSchema[];
}

const globalState = $state<State>({
	isMobile: true,
	notifications: []
});

export const globalStore = {
	get isMobile() {
		return globalState.isMobile;
	},
	get notifications() {
		return globalState.notifications;
	},
	setWidthChange(innerWidth: number) {
		globalState.isMobile = innerWidth <= 728;
	},
	notifyUser(title: string, message: string) {
		globalState.notifications.push({ title, message, notifiedAt: new Date() });
	},
	dismissNotification(index: number) {
		globalState.notifications.splice(index, 1);
	}
};
