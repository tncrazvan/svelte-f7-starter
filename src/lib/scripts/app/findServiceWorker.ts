import swr from "../../stores/serviceWorkerRegistration"

const FILE_NAME = '/service-worker.js'

async function findServiceWorker(registrations){
	if(registrations.length > 0){
		let reg = null;
		for(let i = 0; i < registrations.length; i++){
			if(registrations[i].active && window.location.origin+FILE_NAME === registrations[i].active.scriptURL){
				reg = registrations[i];
				break;
			}
		}
		if(reg === null)
			console.info(`Service worker '${FILE_NAME}' not found!`);
		else{
			console.info(`Service worker '${FILE_NAME}' found!`);
			swr.set(reg);
		}
	}else{
		console.info("No service worker registered on this website.");
		console.log(`New worker registration request created for '${FILE_NAME}'.`);
		await navigator.serviceWorker.register(FILE_NAME);
		let wk:ServiceWorkerRegistration = await navigator.serviceWorker.ready;
		swr.set(wk);
	}
}


export {
    findServiceWorker
};