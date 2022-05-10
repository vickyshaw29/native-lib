import EventBus, { EventCallback } from 'js-event-bus';

const eb = new EventBus();
const devBus = new EventBus();

const ebi: {
	on: any
	emit: any,
	devEmit: any,
	onDev: any,
	detach: any,
	detachDev: any
} = {
	on: (message: any, callback: any) => {
		return eb.on(message, callback);
	},
	onDev: (message: string, callback: EventCallback) => {
		return devBus.on(message, callback);
	},
	emit: (message: any, payload: any) => {
		console.log("EVENTBUS", message, payload)
		return eb.emit(message, null, payload);
	},
	devEmit: (message: string, payload: any) => {
		return devBus.emit(message, null, payload)
	},
	detach: (message: string, callback: EventCallback | undefined) => {
		return eb.detach(message, callback);
	},
	detachDev: (message: string, callback: EventCallback | undefined) => {
		return devBus.detach(message, callback);
	},
}

export default ebi