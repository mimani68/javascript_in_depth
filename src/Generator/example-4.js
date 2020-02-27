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
 * Class for create standard response in Generators
 *
 * @class
 * @param {*} fnGeneratorNeedJson
 */
function GeneratorToJson( fnGeneratorNeedJson ) {

	const wrapper = function() {
		return this
	}

	/**
	 *
	 * Convert `generator` to `JSON`
	 *
	 */
	const returnValue = function( generatorFn ) {
		let instanceOne = generatorFn
		let error = instanceOne.next().value
		let responce = instanceOne.next().value
		let returnLastValus = {
			hasError: error ? true : false,
			error : error ? error : null,
			response: error ? null : responce
		}
		return returnLastValus
	}


	let e = wrapper.apply({ returnValue }, null)
	return e.returnValue( fnGeneratorNeedJson )
}



const sampleGenerator = function* (errorFlag, value) {
	const error = errorFlag
	if ( error ) {
		yield 'error'
	} else {
		yield null
	}
	yield value
}

var o = GeneratorToJson(sampleGenerator(false, {id:1, user:'mahdi'}))
console.log(o)
