/**
 * 
 * @param {*} name 
 * @returns void
 * @version 0.0.1
 * @author mahdi imani
 */
function App(name) {
    console.log('start app ' + name);
}

App.prototype.setVersion = function( version ) {
    this.version = version;
    console.log('port: ' + this.version);
    return this;
}

App.prototype.setPort = function( port ) {
    this.port = port;
    console.log('version: ' + this.port);
    return this;
}

App.prototype.show = function() {
    console.log('show result');
    console.log(this);
}

var a = new App('AntiVirus');
a.version = '0.0.1';
a.setVersion('0.0.2').setPort('3000').show();
