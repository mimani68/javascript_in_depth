/**
 *
 *   ____                           _
 *  / ___| ___ _ __   ___ _ __ __ _| |_ ___  _ __
 * | |  _ / _ \ '_ \ / _ \ '__/ _` | __/ _ \| '__|
 * | |_| |  __/ | | |  __/ | | (_| | || (_) | |
 *  \____|\___|_| |_|\___|_|  \__,_|\__\___/|_|
 *
 */


/**
 *
 * create `chain pattern`
 *
 */
function appWrapper() {
	return this
}

function* sampleGenerator() {
	for( let i = 0 ; i < 5 ; i++ ) {
		yield i
	}
}

/**
 *
 * use loop on generator
 *
 */
function forEach() {
	for ( let value of this.sampleGenerator() ) {
		console.log(value)
	}
}

/*
 *
 * Inject `forEach` and `sampleGenerator` into `appWrapper`
 *
 * const object = {
 * 	 sampleGenerator: () => { ... },
 * 	 forEach: () => { ... }
 * }
 *
 */
let temp = appWrapper.bind(Object.assign({forEach, sampleGenerator}), null)
temp().forEach()

