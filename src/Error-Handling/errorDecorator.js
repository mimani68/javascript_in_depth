function catchError(target, name, descriptor) {
	const original = descriptor.value;
	if (typeof original === 'function') {
		descriptor.value = function (...args) {
			try {
				return original.apply(this, args);
			} catch (e) {
				Sentry.captureException(e); // report to some metrics service
			}
		}
	}
}

function catchErrorAsync(target, name, descriptor) {
	const original = descriptor.value;
	if (typeof original === 'function') {
		descriptor.value = async function (...args) {
			try {
				return await original.apply(this, args);
			} catch (e) {
				Sentry.captureException(e); // report to some metrics service
			}
		}
	}
}

class SomeUIComponentDataStore {
	@catchErrorAsync
	async getUser() {
		//do something that can fail
	}

	@catchError
	otherMethod() {
		//do something that can fail
	}
}
