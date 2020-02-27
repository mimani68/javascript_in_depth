/**
 *
 *   ____                           _
 *  / ___| ___ _ __   ___ _ __ __ _| |_ ___  _ __
 * | |  _ / _ \ '_ \ / _ \ '__/ _` | __/ _ \| '__|
 * | |_| |  __/ | | |  __/ | | (_| | || (_) | |
 *  \____|\___|_| |_|\___|_|  \__,_|\__\___/|_|
 *
 */


function* sampleGenerator() {
	for( let i = 0 ; i < 5 ; i++ ) {
		yield i
	}
}

/**
 * get single value of Generator
 */
console.log( sampleGenerator().next() )

/**
 * Loop over all Generator
 */
for ( var value of sampleGenerator() ) {
	console.log( value )
}
