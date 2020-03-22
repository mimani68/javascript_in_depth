
function ErrorWrapper(message = "error occured") {
	this.title = 'logicalError'
	this.message = `[${ this.title }] ${ message }`
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
		return new ErrorWrapper('name is empty')
	if (params === 'family')
		return new ErrorWrapper('family is empty')
	return {
		title: 'Halo'
	}
}

function application() {
	let e = sampleController('family')
	if (e instanceof ErrorWrapper) {
		console.error(e.message)
		return
	}
	console.log('success run application')
}

application()
