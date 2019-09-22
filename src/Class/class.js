/**
 * 
 * @param {*} name 
 * @returns void
 * @version 0.0.1
 * @author mahdi imani
 */
function App(name) {
    console.log('[x] start app ' + name + ' version:' + this.version);
}

var injectable_object = {
    version: '1.0.0'
}

/**
 * 
 * Instantiation Class
 * 
 */
new App('Defender');

/**
 * 
 * Inject class and call in same time
 * 
 */
App.call(injectable_object, 'Antivirus');
App.apply(injectable_object, ['Antivirus']);

console.log('finsih application');
