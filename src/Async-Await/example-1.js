
function serverResponceSimulator(value) {
	return new Promise((res, rej) => {
		setTimeout(_ => res(value), 1000)
	});
}

function getFromServer(value) {
	return serverResponceSimulator(value);
}

( async () => {
	console.log('Start app');
	console.log(await getFromServer('firstApp'));
	console.log('after load data from server');
	getFromServer('secondApp').then(o => console.log('salam %s', o))
	console.log('Finish app');
})();
