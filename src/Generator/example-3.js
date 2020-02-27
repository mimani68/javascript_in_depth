function* salam() {
	yield 'one';
	yield 'two';
	yield 'three';
}

function coreSalamTwo(value) {
	return new Promise((res, rej) => {
		setTimeout(_ => res(value), 1000)
	});
}

function getFromServer(value) {
	return coreSalamTwo(value);
}

( async () => {
	console.log('1');
	console.log(await getFromServer('firstApp'));
	console.log('2');
	getFromServer('secondApp').then(o => console.log('salam %s', o))
	console.log('3');
	// console.log(salam().next()); // => {"value":"one": "done":false}
	// salamTwoInterface()
	// 	.then(o => console.log(o)) // => {}
	// 	.catch(o => console.error(o)); // => {}

	// setTimeout(_ => {
	// 	salamTwoInterface()
	// 		.then(o => console.log(o)) // => {}
	// 		.catch(o => console.error(o)); // => {}
	// }, 1000)

})();
