
function ErrorWrapper(message = "error occured", localStatusCode) {
	this.title = 'logicalError'
	this.message = `[${ this.title }] ${ message }`
	this.code = localStatusCode || 0
	this.isLogical = true
	this.stack = new Error().stack
	this.sendToCentralErrorLogServer()
	return this
}

ErrorWrapper.prototype.sendToCentralErrorLogServer = function () {
	console.info(`[remoteLogger] send to error server`)
	console.info(`[remoteLogger] ${ this.stack }`)
}

function sampleController(params) {
	if (params === 'name')
		return new ErrorWrapper('name is empty', 1)
	if (params === 'family')
		return new ErrorWrapper('family is empty', 2)
	return {
		title: 'Halo'
	}
}

function application() {
	let e = sampleController('family')
	if ( e instanceof ErrorWrapper && e.code === 2 ) {
		console.error('Incomplete user data')
		return
	}
	if (e instanceof ErrorWrapper) {
		console.error(e.message)
		return
	}
	console.log('success run application')
}

application()
