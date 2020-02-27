
function main() {
	return this
}

function* sampleGenerator() {
	for( let i = 0 ; i < 5 ; i++ ) {
		yield i
	}
}

function forEach() {
	for ( let value of this.sampleGenerator() ) {
		console.log(value)
	}
}

let e = main.bind(Object.assign({forEach, sampleGenerator}), null)
e().forEach()

