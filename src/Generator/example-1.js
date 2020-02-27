
function* sampleGenerator() {
	for( let i = 0 ; i < 5 ; i++ ) {
		yield i
	}
}

for ( var value of sampleGenerator() ) {
	console.log( value )
}
